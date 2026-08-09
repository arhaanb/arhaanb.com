import fetch from 'isomorphic-unfetch'
import { getAccessToken } from './spotify.js'

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`

export const getTopTracks = async () => {
	const access_token = await getAccessToken()

	const response = await fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})

	if (!response.ok) {
		throw new Error(`Spotify top-tracks request failed (${response.status})`)
	}

	return response
}
