import { getNowPlaying } from '../lib/spotify'
import Filter from 'bad-words'
var filter = new Filter()

export default defineEventHandler(async (event) => {
	if (process.env.ENABLE_SPOTIFY !== 'true') {
		return {
			isPlaying: false,
			message:
				'Spotify feature is disabled (check the `ENABLE_SPOTIFY` environment variable)'
		}
	}

	try {
		const response = await getNowPlaying()

		if (response.status === 204) {
			return { isPlaying: false, message: 'No song playing currently' }
		}

		const song = await response.json()
		const isPlaying = song?.is_playing
		const title = song?.item?.name
		const artist = song?.item?.artists?.map((_artist) => _artist.name).join(', ')
		const album = song?.item?.album?.name
		const albumImageUrl = song?.item?.album?.images?.[0]?.url || ''
		const songUrl = song?.item?.external_urls?.spotify
		const cleanTitle = filter.clean(song?.item?.name || '')

		if (isPlaying) {
			return {
				album,
				albumImageUrl,
				artist,
				isPlaying,
				songUrl,
				title,
				cleanTitle
			}
		}

		return {
			isPlaying,
			message: 'No song playing currently'
		}
	} catch (error) {
		console.error('Error fetching now playing:', error)
		return {
			isPlaying: false,
			error: error.message || 'Failed to fetch now playing'
		}
	}
})
