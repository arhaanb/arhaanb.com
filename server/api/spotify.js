import { getNowPlaying } from '../lib/spotify'
import Filter from 'bad-words'
var filter = new Filter()

export default defineEventHandler(async (event) => {
	if (process.env.ENABLE_SPOTIFY == 'true') {
		const response = await getNowPlaying()

		if (response.status === 204 || response.status > 400) {
			return { isPlaying: false }
		}
		var albumImageUrl = ''
		var songUrl = ''
		const song = await response.json()
		const isPlaying = song?.is_playing
		const title = song?.item.name
		const artist = song?.item.artists.map((_artist) => _artist.name).join(', ')
		const album = song?.item.album.name
		const cleanTitle = filter.clean(song?.item.name || '')
		if (song?.item.album.images.length > 0) {
			albumImageUrl = song?.item?.album?.images[0]?.url
		}
		if (song?.item.external_urls) {
			songUrl = song?.item?.external_urls?.spotify
		}

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
		} else {
			return {
				isPlaying,
				message: 'No song playing currently'
			}
		}
	} else {
		return {
			isPlaying: false,
			message:
				'Spotify feature is disabled (check the `ENABLE_SPOTIFY` environment variable)'
		}
	}
})
