import fetch from 'isomorphic-unfetch'
const params = new URLSearchParams()

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

params.append('grant_type', 'refresh_token')
params.append('refresh_token', refresh_token)

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	})

	return response.json()
}

export const getTopTracks = async () => {
	const { access_token } = await getAccessToken()

	return fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})
}
