<template>
	<div>
		<h5 class="zero">Top Tracks</h5>
		<p>My top tracks from Spotify this month</p>
		<ol v-if="songs">
			<div class="song" v-for="song in songs.slice(0, 5)" :key="song.songUrl">
				<li>
					<a target="_blank" :href="song.songUrl">
						{{ song.title }}
						<i>by</i> {{ song.artist }}
					</a>
				</li>
			</div>
		</ol>
		<ol v-else>
			<li v-for="i in 5" :key="i">
				<Skeletor
					style="margin-left: 0.25em"
					:width="`${getRandom(45, 80)}%`"
				/>
			</li>
			<br />
		</ol>
	</div>
</template>

<script>
import axios from 'axios'
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from 'vue-skeletor'

var url = ''

export default {
	components: { Skeletor },
	data() {
		return {
			songs: false
		}
	},
	mounted() {
		this.getSongs()
	},
	methods: {
		getSongs() {
			if (process.env.NODE_ENV == 'development') {
				url = 'https://arhaanb.co/api/top-tracks'
			} else {
				url = '/api/top-tracks'
			}

			axios
				.get(url)
				.then((res) => {
					this.songs = res.data.tracks
				})
				.catch((err) => console.log(err))
		},
		getRandom(min, max) {
			return Math.floor(Math.random() * (max - min)) + min
		}
	}
}
</script>

<style scoped>
ol {
	list-style-position: outside;
	list-style-type: monospace;
}
i {
	font-style: italic;
}
a {
	border-bottom: 1px dashed rgba(34, 34, 34, 0.4);
	transition: 0.3s;
}
a:hover {
	background-color: rgba(127, 255, 212, 0.26);
}
</style>
