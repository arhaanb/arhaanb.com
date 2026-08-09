import fetch from 'isomorphic-unfetch'

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

export const getAccessToken = async () => {
	const params = new URLSearchParams({
		grant_type: 'refresh_token',
		refresh_token
	})

	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	})

	if (!response.ok) {
		const { error_description, error } = await response.json().catch(() => ({}))
		throw new Error(
			`Spotify token refresh failed (${response.status}): ${error_description || error || 'unknown error'}`
		)
	}

	const { access_token } = await response.json()
	if (!access_token) {
		throw new Error('Spotify token refresh returned no access_token')
	}

	return access_token
}

export const getNowPlaying = async () => {
	const access_token = await getAccessToken()

	const response = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})

	if (!response.ok && response.status !== 204) {
		throw new Error(`Spotify now-playing request failed (${response.status})`)
	}

	return response
}
