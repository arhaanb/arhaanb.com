<template>
	<main>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</main>
	<!-- <footer class="footer zero">
		<p class="zero left">&copy; Arhaan Bahadur</p>
		<p class="zero right">social icons here</p>
	</footer> -->
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.left {
	float: left;
}

.right {
	float: right;
	text-align: right;
}

footer.footer {
	padding: 1em 0;
	border-top: 2px solid rgba(34, 34, 34, 0.3);
}
</style>