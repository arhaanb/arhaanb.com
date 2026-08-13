<template>
	<main>
		<div class="cont">
			<!-- <img
			data-aos="fade-in"
			class="topimg"
			src="/me.jpeg"
			alt="Arhaan Bahadur"
			draggable="false"
		/>
			<br />-->

			<div data-aos="fade-in">
				<h4 style class="name fancy">arhaan bahadur</h4>
				<div class="yo zero" style="margin-bottom: 0.55em">
					<h6 class="zero">designer &middot; developer</h6>
				</div>

				<p class="zero intro" style="margin-bottom: 0.4em">
					I’m Arhaan, a <strong>computer science &amp; design</strong> graduate from
					<a class="brand" href="https://hcd.iiitd.ac.in/" target="_blank"
						><img src="/logos/iiitd.svg" alt="IIIT Delhi" /> IIIT Delhi</a
					>,
					{{ phase === 'soon' ? 'joining' : 'currently working at' }}
					<a class="brand brand--uniqlo" href="https://www.fastretailing.com/eng/" target="_blank"
						><img src="/logos/uniqlo.svg" alt="Uniqlo" /> Fast Retailing
						(UNIQLO)</a
					>
					in <span class="tokyo">🇯🇵 Tokyo</span
					>{{ phase === 'soon' ? ' soon' : '' }}.
				</p>
				<p class="zero second" style="margin-bottom: 0em">
					I make thoughtful products with beautiful user experiences. I’m always
					looking for opportunities to work on new projects, participate in a
					hackathon, or do anything interesting. Feel free to
					<nuxt-link to="/explore#contact">reach out</nuxt-link>!
				</p>

				<!-- <p>
					Recently, I co-founded
					<a rel="noopener noreferrer" href="//delhifoundry.co" target="_blank"
						>Delhi Design Foundry</a
					>, and I'm working there as a software engineer and designer.
					Previously, I was the President of my school's technology and
					entrepreneurship club &mdash;
					<a rel="noopener noreferrer" href="//minet.co" target="_blank"
						>MINET</a
					>.
				</p>-->

				<!-- <p class="zero">
					I’m always looking for opportunities to work on new projects,
					participate in a hackathon or do anything fun! Feel free to
					<nuxt-link to="/explore#contact">reach out</nuxt-link>!
				</p> -->
			</div>

			<!-- <img src="https://arhaanbahadur.co/me.jpeg" alt=""> -->
		</div>

		<div class="cont" style="max-width: 43em">
			<br />
			<Page
				data-aos="fade-up"
				title="Portfolio"
				data-aos-once="true"
				to="/projects"
				desc="I build stuff"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-once="true"
				title="Explore"
				to="/explore"
				desc="More arhaanb"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-once="true"
				title="Contact"
				to="/explore#contact"
				desc="Let's talk"
			/>
			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-once="true"
				title="Resume"
				to="https://arhaanb.com/resume"
				desc="Stuff I do"
				ext
			/> -->
			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="250"
				data-aos-once="true"
				title="Support"
				to="https://www.buymeacoffee.com/arhaanb"
				desc="Buy me a coffee"
				ext
			/> -->

			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Resume"
				to="https://arhaanb.com/resume"
				desc="What I've been up to"
				ext
			/> -->
			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Posts"
				to="/posts"
				desc="Quick project reports"
			/> -->
		</div>

		<section class="mt-12">
			<div class="cont">
				<h3 class="fancy mb-3 lg:mb-5 zero">
					Building & designing <br />
					delightful experiences.
				</h3>
				<p class="mb-3 lg:mb-8">
					I work with startups to design & build beautiful products.
					<nuxt-link to="/projects">view more &rarr;</nuxt-link>
				</p>
				<!-- <p>I build web and mobile apps.</p> -->
			</div>

			<!-- <div class="proj-scroll">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div> -->

			<EmblaCarousel />

			<!-- <section class="embla">
				<div class="embla__viewport">
					<div class="embla__container">
						<div class="embla__slide">
							<div class="embla__slide__number">1</div>
						</div>
						<div class="embla__slide">
							<div class="embla__slide__number">2</div>
						</div>
						<div class="embla__slide">
							<div class="embla__slide__number">3</div>
						</div>
						<div class="embla__slide">
							<div class="embla__slide__number">4</div>
						</div>
						<div class="embla__slide">
							<div class="embla__slide__number">5</div>
						</div>
					</div>
				</div>

				<div class="embla__controls">
					<div class="embla__buttons">
						<button class="embla__button embla__button--prev" type="button">
							<svg class="embla__button__svg" viewBox="0 0 532 532">
								<path
									fill="currentColor"
									d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
								></path>
							</svg>
						</button>

						<button class="embla__button embla__button--next" type="button">
							<svg class="embla__button__svg" viewBox="0 0 532 532">
								<path
									fill="currentColor"
									d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
								></path>
							</svg>
						</button>
					</div>

					<div class="embla__dots"></div>
				</div>
			</section> -->
		</section>

		<!-- <section class="clients-section">
			<div class="cont">
				<h3 class="fancy zero mb-3 lg:mb-5">brands &amp; clients</h3>
				<p class="clients-sub mb-6">
					Teams and companies I've had the chance to work with.
				</p>
				<div class="client-logos">
					<a
						v-for="c in clients"
						:key="c.name"
						:href="c.url"
						target="_blank"
						rel="noopener noreferrer"
						class="client-logo"
						:title="c.name"
					>
						<img v-if="c.img" :src="c.img" :alt="c.name" loading="lazy" />
						<span v-else class="client-wordmark">{{ c.name }}</span>
					</a>
				</div>
			</div>
		</section>

		<section class="gallery-section">
			<div class="cont">
				<h3 class="fancy zero mb-3 lg:mb-5">selected work</h3>
				<p class="gallery-sub mb-6">
					A few of my favourite things I've designed &amp; built.
				</p>
			</div>

			<div class="gallery-inner">
				<div class="gallery-grid">
					<nuxt-link
						v-for="p in gallery"
						:key="p.name"
						:to="p.link"
						class="polaroid"
						:style="{ '--tilt': p.tilt }"
						:target="p.link.startsWith('/') ? '_self' : '_blank'"
					>
						<div class="polaroid-img">
							<img :src="p.img" :alt="p.name" loading="lazy" />
						</div>
						<div class="polaroid-cap">
							<span class="polaroid-name">{{ p.name }}</span>
							<span class="polaroid-tag">{{ p.tag }}</span>
						</div>
					</nuxt-link>
				</div>
			</div>
		</section> -->

		<br /><br />

		<!-- <section>
			<div class="cont">
				<h3 class="fancy mb-3 lg:mb-5">
					i've had the chance to wrok with some crazy brands
				</h3>
			</div>

			<div class="navcont logos">
				<img
					src="https://equitree.vercel.app/_next/static/media/logo.0d1e6b8d.png"
					alt=""
					:key="i"
					v-for="i in 15"
				/>
				<img
					src="https://daysforclothing.com/cdn/shop/files/LOGO_LANDSCAPE-removebg-preview_a0c21198-2a60-4b75-9429-9aa28f24b08a.jpg?v=1718224774&width=600"
					:key="i"
					v-for="i in 10"
					alt=""
				/>
			</div>
		</section>

		<section class="cont">
			<h3 class="fancy mb-3 lg:mb-5">like what you see?</h3>
			<Contact />
		</section> -->
		<!-- @contextmenu="onContextMenu($event)" -->
		<!-- <div class="cont">
			<div class="flex-center">
				<div class="six columns">
					<div class="flex-center">
						<img
							draggable="false"
							loading="lazy"
							src="/polaroid.png"
							alt="me irl (fr)"
							class="topimg"
							style="margin-top: 3em; border-radius: 0.5em"
						/>
					</div>
				</div>
				<div class="u-cf"></div>
			</div>
		</div> -->

		<!-- <div class="navcont">
			<div class="pics">
				<div class="picsgrid">
					<div v-for="img in links" :key="img">
						<img
							data-aos="fade-up"
							:src="img"
							alt="img"
							draggable="false"
							loading="lazy"
						/>
					</div>
				</div>
				<h6 class="center zero meirl">me &#38; my friends irl</h6>
				<h6 class="center" style="opacity: 0.7">me irl</h6>
			</div>
		</div> -->

		<!-- <div class="cont socialstuff">
			<h4>My socials</h4>
			<div class="socialgrid">
				<Page icon="ig" title="Instagram" />
				<Page title="Twitter" />
				<Page title="GitHub" />
				<Page title="Behance" />
				<Page title="Spotify" />
				<Page title="LinkedIn" />
				<Page title="Email" />
			</div>
		</div> -->
	</main>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue()

const clients = [
	{
		name: 'IIIT Delhi',
		img: '/logos/iiitd.svg',
		url: 'https://hcd.iiitd.ac.in/'
	},
	{
		name: 'Fast Retailing',
		img: '/logos/uniqlo.svg',
		url: 'https://www.fastretailing.com/eng/'
	},
	{ name: 'Cricket Bat Company', url: 'https://cricketbatcompany.com' },
	{ name: 'SOMA', url: 'https://mysoma.in' },
	{ name: 'CoachIn', url: 'https://coachin.in' },
	{ name: 'TopBar', url: 'https://topbar.io' }
]

const gallery = [
	{
		name: 'Sparsh',
		img: '/projects/sparsh.png',
		link: '/projects/sparsh',
		tag: 'tap to pay · UPI',
		tilt: '-1.2deg'
	},
	{
		name: 'PAYOUT.',
		img: '/img/projects/payout/hero.png',
		link: '/projects/payout',
		tag: 'crowdfunding',
		tilt: '1.2deg'
	},
	{
		name: 'Cricket Bat Company',
		img: '/projects/cbc.png',
		link: 'https://cricketbatcompany.com',
		tag: 'e-commerce',
		tilt: '1deg'
	},
	{
		name: 'Vipriya',
		img: '/img/projects/vipriya/banner.webp',
		link: '/projects/vipriya',
		tag: 'dating · music',
		tilt: '-1deg'
	},
	{
		name: 'Sahay',
		img: '/img/projects/sahay/cover.png',
		link: '/projects/sahay',
		tag: 'healthcare',
		tilt: '1.4deg'
	},
	{
		name: 'link+ai',
		img: '/img/projects/linkplusai/cover.png',
		link: '/projects/linkplusai',
		tag: 'smart links',
		tilt: '-1.4deg'
	}
]
</script>

<script>
export default {
	data() {
		return {
			age: 20,
			prefix: 'a'
		}
	},
	mounted() {
		const age = this.getAge('7/23/03')
		this.age = age
		this.prefix = [8, 11, 18].includes(age) ? 'an' : 'a'
	},
	computed: {
		phase() {
			return new Date() >= new Date(2026, 8, 1) ? 'current' : 'soon'
		}
	},
	methods: {
		getAge(DOB) {
			var today = new Date()
			var birthDate = new Date(DOB)
			var age = today.getFullYear() - birthDate.getFullYear()
			var m = today.getMonth() - birthDate.getMonth()
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age = age - 1
			}
			return age
		},
		onContextMenu(e) {
			//prevent the browser's default menu
			e.preventDefault()
			//show our menu
			this.$contextmenu({
				items: [
					{
						label: 'Download image',
						onClick: () => {
							window.open('https://arhaanb.com/new_me.jpeg')
						}
					},
					// {
					// 	label: 'Copy image',
					// 	onClick: () => {
					// 		navigator.clipboard.write([
					// 			new ClipboardItem({
					// 				'image/png': 'https://arhaanb.com/new_me.jpeg'
					// 			})
					// 		])
					// 	}
					// },
					{
						label: 'Copy image address',
						onClick: () => {
							navigator.clipboard.writeText('https://arhaanb.com/new_me.jpeg')
						}
					},
					{
						label: 'Download polaroid',
						onClick: () => {
							window.open('https://arhaanb.com/polaroid.png')
						}
					},
					{
						label: 'Copy polaroid address',
						onClick: () => {
							navigator.clipboard.writeText('https://arhaanb.com/polaroid.png')
						}
					}
				],
				iconFontClass: 'iconfont',
				customClass: 'class-a',
				zIndex: 3,
				minWidth: 230,
				x: e.x,
				y: e.y
			})
		}
	}
}
</script>

<style scoped lang="scss">
.logos {
	margin-bottom: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 2.5em;
	row-gap: 1em;
	img {
		height: 2.5em;
	}
}

.clients-section {
	margin-top: 2em;
}
.clients-sub,
.gallery-sub {
	opacity: 0.75;
}
.client-logos {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 1.75em 2.75em;
	padding: 1.5em 0 2.5em;
}
.client-logo {
	opacity: 0.7;
	filter: grayscale(1);
	transition: 0.3s ease;
	img {
		height: 2.2em;
		width: auto;
		object-fit: contain;
	}
	.client-wordmark {
		font-family: 'augillion', var(--fontSans);
		font-size: 1.5em;
		color: #222;
		white-space: nowrap;
	}
	&:hover {
		opacity: 1;
		filter: none;
		transform: translateY(-2px);
	}
}

.gallery-section {
	margin-top: 2em;
}
.gallery-inner {
	margin: 1.25em auto 0;
	padding: 0 2em;
	max-width: 54em;
}
.gallery-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.75em;
}
.polaroid {
	display: block;
	background: #fff;
	border-radius: 1em;
	padding: 0.8em;
	box-shadow: 0 2px 12px rgba(34, 34, 34, 0.1);
	transform: rotate(var(--tilt, 0deg));
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	.polaroid-img {
		border-radius: 0.6em;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		background: #faf5ec;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
			transition: transform 0.4s ease;
		}
	}
	.polaroid-cap {
		display: flex;
		flex-direction: column;
		gap: 0.15em;
		padding: 0.7em 0.15em 0.2em;
	}
	.polaroid-name {
		font-size: 1.02em;
		font-weight: 700;
		letter-spacing: -0.01em;
		line-height: 1.3;
		color: #222;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.polaroid-tag {
		font-size: 0.72em;
		font-weight: 600;
		opacity: 0.55;
		letter-spacing: 0.03em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	&:hover {
		transform: rotate(0deg) translateY(-4px);
		box-shadow: 0 8px 24px rgba(34, 34, 34, 0.14);
		.polaroid-img img {
			transform: scale(1.05);
		}
	}
}

.proj-scroll {
	margin-top: 2em;
	overflow-x: auto;
	white-space: nowrap;
	display: flex;
}
.brand,
.tokyo {
	display: inline-flex;
	align-items: center;
	gap: 0.35em;
	background: #fff;
	font-size: 0.92em;
	font-weight: 600;
	padding: 0.02em 0.45em 0.05em;
	border-radius: 0.5em;
	border: 1.5px solid;
	box-shadow: 0 2px 8px rgba(34, 34, 34, 0.08);
	white-space: nowrap;
	--tilt: -1deg;
	transform: rotate(var(--tilt));
	transition: 0.3s;
	img {
		height: 0.95em;
		width: auto;
	}
}
.brand {
	color: #2b559e;
	border-color: #2b559e;
}
.brand--uniqlo {
	color: #e2231a;
	border-color: #e2231a;
	--tilt: -1deg;
}
.tokyo {
	color: #222;
	border-color: #222;
	--tilt: 0.75deg;
}
.brand:hover,
.tokyo:hover {
	--tilt: 0deg;
	transform: rotate(var(--tilt)) translateY(-1px);
	background: #fff;
}

.pics img {
	width: 100%;
}

.pics {
	margin-top: 2em;
	margin-bottom: 2.5em;
}
.picsgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(3, 1fr);
}
.socialgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(2, 1fr);
}
.meirl {
	/* margin-top: 2em; */
	font-size: 1.1em;
}
@media (max-width: 750px) {
	.brand,
	.tokyo {
		transform: none;
		font-size: 0.88em;
		line-height: 1.2;
		padding: 0.12em 0.45em;
		border-width: 1.25px;
		box-shadow: none;
		img {
			height: 0.85em;
		}
	}
	.meirl {
		margin-top: 0;
	}
	.intro {
		line-height: 1.65em;
		text-wrap: balance;
	}
	.second {
		margin-top: 1em;
	}
	.picsgrid,
	.socialgrid {
		display: grid;
		/* grid-gap: 3em; */
		grid-gap: 0;
		grid-template-columns: repeat(1, 1fr);
	}
	.client-logos {
		justify-content: flex-start;
		gap: 1.5em 2em;
		padding: 1.25em 0 2em;
	}
	.gallery-grid {
		grid-template-columns: 1fr;
	}
	.pics {
		margin-top: 0;
		margin-bottom: 0;
	}
}
.yo,
.name {
	margin: 0;
	font-size: 2.15em;
}

.name {
	margin-top: 1.5em;
	margin-bottom: -0.35em;
}

h1 {
	font-size: 5em;
	margin: 0;
}
.subtitle {
	margin: 0;
	font-size: 2em;
	font-weight: 500;
	opacity: 0.65;
	margin-top: -0.25em;
}
.subtitle a {
	border: none;
}
.main {
	margin-top: 12em;
}
img.topimg {
	width: 10em;
	border-radius: 0.5em;
	margin-bottom: 1em;
}
.vh {
	margin: 0 auto;
	max-width: 50em;
	margin-top: 20vh;
}
.sml {
	font-size: 0.5em;
}
.nav a {
	border: none;
	margin: 0 1em;
	font-size: 1em;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}
.nav {
	margin-top: 1em;
}
.yo a {
	transition: 0.3s;
}
.yo a:hover {
	color: #69e;
}
.topimg {
	margin-top: 0.5em;
	width: 100% !important;
}
@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
		width: 75% !important;
	}
	.name {
		margin-top: 0.75em;
	}
}
</style>
