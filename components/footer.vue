<template>
	<div class="flexfoot">
		<div class="col left">
			<Spotify class="spotify-component" />
		</div>

		<div class="col icon">
			<div class="flex-right">
				<div class="socials">
					<a
						href="https://twitter.com/arhaanbahadur"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon name="mdi:twitter" />
					</a>
					<a
						href="https://instagram.com/arhaan_bahadur"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon name="mdi:instagram" />
					</a>
					<a
						href="https://github.com/arhaanb"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon name="mdi:github" />
					</a>
					<a
						href="https://open.spotify.com/user/arhaanb"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon name="mdi:spotify" />
					</a>

					<a
						href="//linkedin.com/in/arhaanb"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="mdi:linkedin" />
					</a>

					<a
						href="//behance.net/arhaanbahadur"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="mdi:behance" />
					</a>

					<a
						href="mailto:hi@arhaanb.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icon name="mdi:email" />
					</a>
				</div>
				<p class="zero arhn">Arhaan Bahadur</p>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.arhn {
	margin-top: 0.35em;
	display: none;
}

.spotify-component {
	margin-top: 2em;
}

.socials {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: -2.3em;
}

.flex-right {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
}

.socials a {
	/* color: #69e; */
	color: var(--red-text);
	transition: 0.3s;
	font-size: 1.1em;
	margin: 0;
	padding: 0.5em;
	margin-left: 0.35em;
}

@media (max-width: 750px) {
	.flex-right {
		align-items: flex-start;
	}
	.socials a {
		margin-left: 0;
		padding: 0;
		margin-right: 1em;
		padding: 0.25em 0.25em 0.25em 0;
	}
	.socials {
		margin-top: 1em;
	}
	.arhn {
		display: none;
	}
}

.socials a:hover {
	opacity: 0.6;
}

.flexfoot {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.col {
	flex: 1 1 0px;
}

@media (max-width: 750px) {
	.flexfoot {
		flex-direction: column;
		align-items: flex-start;
	}
	.col {
		width: 100%;
	}
	.col.icon {
		width: 65%;
	}
	.flexfoot {
		margin-bottom: 4em;
	}
}
</style>
