import { getTopTracks } from '../lib/top-tracks'
import Filter from 'bad-words'
var filter = new Filter()

export default defineEventHandler(async (event) => {
	const response = await getTopTracks()
	const { items } = await response.json()

	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(', '),
		songUrl: track?.external_urls?.spotify,
		title: track?.name,
		albumArt: track?.album?.images[0].url,
		cleanTitle: filter.clean(track?.name || '')
	}))

	return { tracks }
})
