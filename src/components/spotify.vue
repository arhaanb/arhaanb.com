<template>
	<main class="spotflex">
		<a target="_blank" class="logo" href="//arhn.us/spotify">
			<img src="@/assets/spotify.svg" alt="Spotify Icon" />
		</a>
		<div id="spotifycontainer">
			<h5 v-if="spotify.isPlaying" class="title spotifytitle">
				<a class="green" :href="spotify.songUrl" target="_blank">
					<span :title="spotify.title">{{
						spotify.title.length > 34
							? `${spotify.title.slice(0, 34)}...`
							: spotify.title
					}}</span>
				</a>
			</h5>
			<h5 class="title not" v-else>Not playing</h5>
			<h5 class="artist spotifytitle">
				<span :title="spotify.artist" v-if="spotify.isPlaying">
					{{
						spotify.artist.length > 42
							? `${spotify.artist.slice(0, 42)}...`
							: spotify.artist
					}}
				</span>
			</h5>
		</div>
	</main>
</template>

<script>
import axios from 'axios'
var url = ''

if (process.env.NODE_ENV == 'development') {
	url = 'https://arhaanb.co/api/spotify'
} else {
	url = '/api/spotify'
}

export default {
	data() {
		return {
			spotify: false
		}
	},
	mounted() {
		this.getSpotifyData()
		this.repeatSpotifyData()
	},
	methods: {
		repeatSpotifyData() {
			axios.get(url).then((res) => {
				this.spotify = res.data
			})
			setTimeout(this.repeatSpotifyData, 2000)
		},
		getSpotifyData() {
			axios.get(url).then((res) => {
				this.spotify = res.data
			})
		}
	}
}
</script>

<style scoped>
.spotify {
	border: solid rgba(34, 34, 34, 0.363) 1px;
	border-radius: 0.5em;
	padding: 1em;
}

.title {
	font-size: 1.1em;
}

.green {
	color: rgb(6, 124, 85);
}
.artist {
	font-size: 0.9em;
}

.spotify * {
	margin: 0;
}

.spoticon {
	margin-right: 2em;
}

.flex {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
a {
	transition: 0.3s;
}
a.green:hover {
	background-color: rgba(210, 255, 221, 0.562);
}

.spotflex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.spotflex img {
	width: 1.25em;
}

.artist {
	font-size: 0.85em;
}

.logo {
	margin: 0;
	margin-top: -1em;
	margin-right: 0.25em;
}

.not {
	font-size: 0.85em;
}

@media (max-width: 750px) {
	.not {
		font-size: 0.95em;
	}
}
</style>
