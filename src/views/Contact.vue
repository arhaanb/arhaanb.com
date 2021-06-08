<template>
	<div class="cont">
		<h2 class="title">Let's talk.</h2>
		<p class="sub">
			Let me know what you think about this website! Or let's work on a project
			together! I'll try to get back to you as soon as possible.
		</p>

		<div class="row">
			<div class="six columns">
				<h5 style="margin-bottom: 0.4em">Message me</h5>
				<form v-if="!submitted" @submit.prevent="submitForm()">
					<input type="text" v-model="form.name" required placeholder="Name" />
					<input
						type="email"
						v-model="form.email"
						required
						placeholder="Email"
					/>
					<textarea
						type="text"
						v-model="form.message"
						required
						placeholder="Anything you wanna say"
					/>

					<p v-if="error">{{ error }}</p>

					<div class="flex-center">
						<button
							:style="loading ? 'padding: 0 3em;' : ''"
							type="submit"
							:disabled="loading"
							class="cool u-pull-right"
						>
							<span v-if="!loading">Send</span>
							<span v-if="loading"><div class="loader"></div></span>
						</button>
					</div>
				</form>

				<div v-if="submitted">
					<p style="font-size: 1.2em">
						Thank you for the message! I'll get back to you as soon as possible.
					</p>
					<br /><br /><br />
					<br /><br /><br />
					<br /><br />
				</div>
			</div>

			<div class="six columns">
				<h5 style="font-size: 1.2em">
					You could also text me on one of my socials given below.
				</h5>

				<div class="socials">
					<a href="//instagram.com/arhaan_bahadur" target="_blank">Instagram</a>
					<a href="//twitter.com/arhaan_bahadur" target="_blank">Twitter</a>
					<a href="//github.com/arhaanb" target="_blank">GitHub</a>
					<a href="//linkedin.com/in/arhaanb" target="_blank">Linkedin</a>
					<a href="//open.spotify.com/user/arhaanb" target="_blank">Spotify</a>
					<a href="mailto:hi@arhaanb.co" target="_blank">Email</a>
				</div>
			</div>
		</div>
		<div class="u-cf"></div>

		<br /><br /><br />
		<div class="anti"><br v-if="!error" /><br v-if="!error" /></div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			loading: false,
			submitted: false,
			error: false,
			form: {
				name: '',
				email: '',
				message: ''
			}
		}
	},
	methods: {
		submitForm() {
			this.loading = true
			axios.post('/api/msg', this.form).then((res) => {
				console.log(res.data)
				if (res.data.error == false) {
					this.form.name = ''
					this.form.email = ''
					this.form.message = ''
					this.submitted = true
					this.loading = false
				} else {
					this.error =
						'An error occurred. Please try again, or message me on one of my socials instead.'
					this.loading = false
					this.submitted = false
				}
			})
		}
	}
}
</script>

<style scoped>
input,
textarea {
	min-width: 100%;
	max-width: 100%;
	font-family: 'Colfax';
}

textarea {
	min-height: 6em;
}

textarea:focus {
	border-color: #69e;
}

input:focus {
	border-color: #69e !important;
}

button {
	font-family: 'Colfax';
	text-transform: capitalize;
}

.title {
	margin-bottom: 0.25em;
}

.socials {
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(2, 1fr);
}

.socials a {
	color: rgb(30, 80, 165);
	transition: 0.2s;
	font-size: 1.1em;
}

.socials a:hover {
	opacity: 0.5;
}

button.cool {
	box-shadow: 0px 8px 32px rgba(56, 123, 217, 0.6);
	background-color: #6699ee;
	color: #fff;
	border: none;
	transform: translateY(-4px);
	transition: 0.5s;
	letter-spacing: 0;
	font-size: 0.9em;
}

button.cool:hover:not(:disabled) {
	transform: translateY(0px);
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	background-color: rgb(67, 114, 196);
}

button.cool:disabled {
	transform: translateY(0px);
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	background-color: rgb(138, 176, 241);
}

/* Loader */
.loader,
.loader:after {
	border-radius: 50%;
	width: 1em;
	height: 1em;
}
.loader {
	margin: 0 auto;
	font-size: 10px;
	position: relative;
	border-top: 0.2em solid rgba(255, 255, 255, 0.2);
	border-right: 0.2em solid rgba(255, 255, 255, 0.2);
	border-bottom: 0.2em solid rgba(255, 255, 255, 0.2);
	border-left: 0.2em solid #ffffff;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load8 1.1s infinite linear;
	animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

.flex-center {
	align-items: flex-end;
}

@media (max-width: 750px) {
	button.cool {
		margin-bottom: 3em;
		width: 60%;
		margin-top: 0.75em;
	}
	.flex-center {
		align-items: center;
	}
}
</style>
