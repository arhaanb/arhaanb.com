<template>
	<main>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
		<div class="cont">
			<Footer :class="`footer footer-${$route.meta.title}`" />
		</div>
	</main>
</template>

<script>
import Footer from './components/footer.vue'
export default {
	components: { Footer }
}
</script>

<style scoped>
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

@media (max-width: 750px) {
	.footer-Home {
		margin-top: 0;
	}
	.footer {
		margin-bottom: -4em;
	}
}

.footer-notfound {
	display: none;
}
</style>
