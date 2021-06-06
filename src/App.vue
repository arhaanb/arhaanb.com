<template>
	<main>
		<nav v-if="$route.meta.title !== 'notfound'" class="navbar">
			<div class="navcont">
				<router-link v-if="$route.meta.title !== 'Home'" class="back" to="/">
					&larr;
				</router-link>
				<router-link v-else to="/">
					<img
						draggable="false"
						class="logo"
						src="/favicon.ico"
						alt="Arhaan's logo"
					/>
				</router-link>

				<div class="links">
					<router-link to="/">Home</router-link>
					<router-link to="/projects">Projects</router-link>
					<router-link to="/hi">Say hi</router-link>
				</div>

				<div class="ham" @click="nav = !nav">
					<img src="@/assets/ham.svg" alt="" />
				</div>
			</div>
		</nav>

		<transition name="fade">
			<div v-if="nav" class="fullnav">
				<div class="navcont">
					<div class="topsec">
						<h1>&nbsp;</h1>

						<div class="ham" @click="nav = !nav">
							<img src="@/assets/close.svg" alt="" />
						</div>
					</div>

					<div class="navdata">
						<div class="flexer">
							<router-link to="/">
								<span @click="nav = !nav">Home</span>
							</router-link>
							<router-link to="/projects">
								<span @click="nav = !nav">Projects</span>
							</router-link>
							<router-link to="/hi">
								<span @click="nav = !nav">Say hi</span>
							</router-link>
						</div>

						<div class="btm">Arhaan Bahadur</div>
					</div>
				</div>
			</div>
		</transition>

		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>

		<div v-if="$route.meta.title !== 'notfound'" class="cont">
			<Footer :class="`footer footer-${$route.meta.title}`" />
		</div>
	</main>
</template>

<script>
import Footer from './components/footer.vue'
export default {
	components: { Footer },
	data() {
		return {
			nav: false
		}
	}
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.navbar .navcont,
.navcont .topsec {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navcont .topsec {
	margin-top: 0.8em;
}

.navbar .links {
	display: flex;
}

.navbar .links a {
	margin-left: 1em;
	font-size: 1.1em;
	transition: 0.2s;
}

.navbar .links a.router-link-exact-active {
	color: #69e;
}

.navbar .links a:hover {
	color: #69e;
}

.navbar {
	padding: 2em 0 1em 0;
	margin-bottom: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.footer-Home {
	margin-top: 5em;
}

.footer-Projects {
	margin-bottom: 2em;
	margin-top: -3em;
}

.ham {
	display: none !important;
}

.ham img {
	width: 1.3em;
}

.footer-notfound {
	display: none;
}

.fullnav {
	width: 100%;
	height: 100vh;
	background-color: #fff;
	position: fixed;
	top: 0;
	z-index: 20;
	overflow: hidden;
}

.navdata {
	.flexer {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 3em;
	}
	.btm {
		position: absolute;
		bottom: 5em;
	}
	a {
		font-size: 2em;
		margin-bottom: 0.65em;
	}
	a.router-link-exact-active {
		color: #69e;
	}
}

.logo {
	width: 1.5em;
}

@media (max-height: 768px) {
	.footer-Home {
		margin-top: 3em;
	}
}
@media (max-width: 750px) {
	.footer-Home {
		margin-top: 0;
	}
	.footer {
		margin-bottom: -4em;
	}
	.navbar .links {
		display: none;
	}
	.ham {
		display: block !important;
	}
}
</style>
