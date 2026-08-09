<template>
	<nav v-if="$route.meta.title !== 'notfound'" class="navbar">
		<div class="navcont">
			<div v-if="$route.path !== '/'" class="flexbruh noselect">
				<nuxt-link class="back" to="/">&larr;</nuxt-link>
				<span>Arhaan Bahadur</span>
			</div>
			<img draggable="false" class="logo" src="/fav.png" alt="logo" v-else />

			<div class="links">
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/projects">Projects</nuxt-link>
				<nuxt-link to="/explore">Explore</nuxt-link>
			</div>

			<div class="ham" @click="nav = !nav">
				<img src="@/assets/img/ham.svg" alt="Open navbar" />
			</div>
		</div>
	</nav>

	<transition name="nav">
		<div v-if="nav" class="fullnav">
			<div class="navcont">
				<div class="topsec">
					<h1>&nbsp;</h1>

					<div class="ham" @click="nav = !nav">
						<img src="@/assets/img/close.svg" alt="Close navbar" />
					</div>
				</div>

				<div class="navdata">
					<div class="flexer">
						<nuxt-link to="/" @click="nav = !nav">Home</nuxt-link>
						<nuxt-link to="/projects" @click="nav = !nav">Projects</nuxt-link>
						<nuxt-link to="/explore" @click="nav = !nav">Explore</nuxt-link>
						<nuxt-link
							class="contactlink"
							to="/explore#contact"
							@click="nav = !nav"
							>Contact</nuxt-link
						>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
const nav = ref(false)

watch(nav, (value) => {
	document.querySelector('body').style.overflow = value ? 'hidden' : 'auto'
})
</script>

<style lang="scss">
.navbar .navcont,
.navcont .topsec {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navcont .topsec {
	margin-top: 0.5em;
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
	color: var(--red-text);
}

.contactlink {
	color: #222 !important;
}

.navbar .links a:hover {
	color: var(--red-text);
}

.navbar {
	padding: 2em 0 1em 0;
	margin-bottom: 1.5em;
}

.nav-enter-active,
.nav-leave-active {
	transition: opacity 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
	opacity: 0;
}

.ham {
	display: none !important;
}

.ham img {
	width: 1.3em;
}

.fullnav {
	width: 100%;
	height: 100vh;
	background-color: var(--bg);
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
		span {
			width: 100% !important;
		}
	}
	a.router-link-exact-active {
		color: var(--red-text);
	}
}

.logo {
	width: 1.5em;
}

.flexbruh {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flexbruh .back {
	margin-right: 1em;
}

.back {
	font-size: 1em !important;
	margin-top: -0.25em;
}

@media (max-width: 750px) {
	.navbar .links {
		display: none;
	}
	.ham {
		display: block !important;
	}
}
</style>
