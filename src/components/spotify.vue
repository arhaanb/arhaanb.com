<template>
	<!-- <div class="spotify">
		<div>
			<h5 class="title">
				<a :href="spotify.songUrl" target="_blank">{{ spotify.title }}</a>
			</h5>
			<h6 class="artist">{{ spotify.artist }}</h6>
		</div>
	</div> -->
	<main v-if="spotify.isPlaying">
		<h5 class="title">
			<a class="green" :href="spotify.songUrl" target="_blank">{{
				spotify.title
			}}</a>
			&mdash;
			{{ spotify.artist }}
		</h5>
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
	font-size: 1.2em;
}

.green {
	color: aquamarine;
}
.artist {
	font-size: 0.9em;
}

.spotify * {
	margin: 0;
}

img {
	width: 30%;
	margin-right: 1em;
	border-radius: 0.5em;
	margin-right: 1em !important;
}

.flex {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
a {
	transition: 0.3s;
}
a:hover {
	background-color: antiquewhite;
}
</style>
