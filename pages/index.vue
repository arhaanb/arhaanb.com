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

				<p class="zero" style="margin-bottom: 0em">
					<!-- Hello! I'm {{ `${prefix} ${age}` }} year old developer and designer,
					currently a freshman studying Computer Science. I enjoy participating
					in Hackathons and Design events, and I've won several of them over the
					last few years. Hello!-->
					I’m Arhaan, {{ `${prefix} ${age}` }} year old student currently
					studying cs and design at
					<a href="//iiitd.ac.in" target="_blank">iiit delhi</a>.
					<!-- <a href="//iiitd.ac.in" target="_blank">IIIT Delhi</a>.  -->
					I make
					<!-- <strike>at college</strike> -->
					<!-- functional and  -->
					cool
					<span class="font-bold">products with beautiful user experiences</span
					>. I’m always looking for opportunities to work on new projects,
					participate in a hackathon or do anything fun! Feel free to
					<nuxt-link to="/explore#contact">reach out</nuxt-link>!
					<!-- I enjoy participating
					in Hackathons and Design events, and I’ve won several of them over the
					last few years.-->
					<!-- You can view some of the
					<router-link to="/projects">projects</router-link> I built, or check
					out my
					<a
						rel="noopener noreferrer"
						href="//github.com/arhaanb"
						target="_blank"
						>GitHub account</a
					>.-->
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
			<Page
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-once="true"
				title="Resume"
				to="https://arhaanb.com/resume"
				desc="Stuff I do"
				ext
			/>
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
.proj-scroll {
	margin-top: 2em;
	overflow-x: auto;
	white-space: nowrap;
	display: flex;
}
p {
	text-transform: lowercase;
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
	.meirl {
		margin-top: 0;
	}
	.picsgrid,
	.socialgrid {
		display: grid;
		/* grid-gap: 3em; */
		grid-gap: 0;
		grid-template-columns: repeat(1, 1fr);
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
