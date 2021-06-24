import { getNowPlaying } from '../lib/spotify'

export default async (_, res) => {
	const response = await getNowPlaying()

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({ isPlaying: false })
	}
	var albumImageUrl = ''
	var songUrl = ''
	const song = await response.json()
	const isPlaying = song.is_playing
	const title = song.item.name
	const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
	const album = song.item.album.name
	if (song.item.album.images.length > 0) {
		albumImageUrl = song.item.album.images[0].url
	}
	if (song.item.external_urls) {
		songUrl = song.item.external_urls.spotify
	}

	return res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title
	})
}
