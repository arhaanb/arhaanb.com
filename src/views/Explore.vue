<template>
	<div class="cont">
		<h2 class="title">Explore</h2>
		<p class="sub">
			<!-- This page serves as a showcase for some of the fun stuff I do that I
			wasn't sure where to put. Check it out! -->
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente
			doloribus, perspiciatis earum excepturi expedita dicta beatae architecto
			ea culpa temporibus quis officia labore tempora tempore deserunt deleniti
			accusamus nihil!
		</p>

		<a href="//arhn.us" target="_blank">
			<div id="design" class="coolbox">
				<div class="flexbox">
					<h6>Design</h6>
					<span><bx-bx-link-external /></span>
				</div>
				<p>
					I'm mostly interested in UI / UX Designs but I've tried making some
					illustrations and 3D Models as well.
				</p>
				<!-- <button class="cta">Check it out</button> -->
			</div>
		</a>

		<a href="//arhn.us" target="_blank">
			<div id="events" class="coolbox">
				<div class="flexbox">
					<h6>Events</h6>
					<span><bx-bx-link-external /></span>
				</div>
				<p>
					I've won and organized loads of International and National Hackathons,
					Design Events, Quizzes, and more.
				</p>
			</div>
		</a>

		<br /><br />

		<Top />

		<br />

		<Contact />

		<br /><br />

		<div class="">
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

		<br />
		<br />
		<br />
	</div>
</template>

<style scoped lang="scss">
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

.coolbox {
	padding: 2em;
	border-radius: 1em;
	margin-bottom: 1.25em;
	transition: 0.3s;
	color: #222;
	h6 {
		margin-bottom: 0.25em;
		font-size: 1.2em;
		margin-right: 0.2em;
	}
	.flexbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	p {
		margin-bottom: 0;
	}
	.cta {
		margin: 0;
		text-transform: none;
		letter-spacing: 0;
	}
}

#design {
	background-color: rgba(146, 184, 250, 0.288);
	h6 {
		color: rgb(43, 85, 158);
	}
}
#design:hover {
	background-color: rgba(146, 184, 250, 0.4);
}

#events {
	background-color: rgba(146, 250, 245, 0.288);
	h6 {
		color: rgb(8, 128, 72);
	}
}
#events:hover {
	background-color: rgba(120, 233, 227, 0.336);
}
</style>
