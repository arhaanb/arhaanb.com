import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const PORT = Number(process.env.PORT) || 8888
const HOST = '127.0.0.1'

const envPath = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	'..',
	'.env'
)

const readEnv = () => {
	if (!fs.existsSync(envPath)) {
		throw new Error(`Missing .env at ${envPath}`)
	}
	const env = {}
	for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
		const trimmed = line.trim()
		if (!trimmed || trimmed.startsWith('#')) continue
		const i = trimmed.indexOf('=')
		if (i === -1) continue
		env[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim()
	}
	return env
}

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = readEnv()
if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
	throw new Error('SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET missing from .env')
}

const redirectUri = () =>
	`http://${HOST}:${server.address().port}/callback`

const open = (url) => {
	const cmd =
		process.platform === 'darwin'
			? `open "${url}"`
			: process.platform === 'win32'
				? `start "" "${url}"`
				: `xdg-open "${url}"`
	exec(cmd)
}

const exchangeCode = async (code, redirectUri) => {
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
			).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: redirectUri
		}).toString()
	})
	const data = await res.json()
	if (!res.ok) {
		throw new Error(
			`Token exchange failed (${res.status}): ${data.error_description || data.error}`
		)
	}
	return data
}

const updateEnv = (refreshToken) => {
	const content = fs.readFileSync(envPath, 'utf8')
	const lines = content.split('\n')
	const idx = lines.findIndex((l) => l.startsWith('SPOTIFY_REFRESH_TOKEN'))
	const newLine = `SPOTIFY_REFRESH_TOKEN=${refreshToken}`
	if (idx === -1) {
		lines.push(newLine)
	} else {
		lines[idx] = newLine
	}
	fs.writeFileSync(envPath, lines.join('\n'))
	console.log(`\nUpdated SPOTIFY_REFRESH_TOKEN in .env`)
}

const server = http.createServer(async (req, res) => {
	const uri = redirectUri()
	const url = new URL(req.url, uri)
	if (url.pathname !== '/callback') {
		res.writeHead(404)
		res.end('Not found')
		return
	}

	if (url.searchParams.get('error')) {
		res.writeHead(400, { 'Content-Type': 'text/html' })
		res.end(`<h2>Authorization failed: ${url.searchParams.get('error')}</h2>`)
		server.close()
		process.exit(1)
	}

	const code = url.searchParams.get('code')
	res.writeHead(200, { 'Content-Type': 'text/html' })
	res.end('<h2>Success! You can close this tab.</h2>')

	try {
		const { refresh_token } = await exchangeCode(code, uri)
		updateEnv(refresh_token)
		console.log('You can close this tab and restart the dev server.')
	} catch (err) {
		console.error(err.message)
		process.exitCode = 1
	}
	server.close()
})

server.listen(PORT, HOST, () => {
	const uri = redirectUri()
	console.log(`Listening for the Spotify callback on ${uri}`)
	console.log(
		'Make sure a matching redirect URI is registered in your Spotify app:\n  https://developer.spotify.com/dashboard'
	)
	const authUrl = new URL('https://accounts.spotify.com/authorize')
	authUrl.searchParams.set('client_id', SPOTIFY_CLIENT_ID)
	authUrl.searchParams.set('response_type', 'code')
	authUrl.searchParams.set('redirect_uri', uri)
	authUrl.searchParams.set(
		'scope',
		'user-top-read user-read-playback-state user-read-currently-playing'
	)
	console.log('Opening your browser to authorize...')
	open(authUrl.toString())
})
