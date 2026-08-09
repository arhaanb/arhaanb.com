<template>
	<main>
		<SiteNav />

		<main>
			<NuxtLoadingIndicator color="#ff983a" />

			<NuxtPage />
		</main>

		<div class="cont">
			<Footer class="footer" />
		</div>
	</main>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.5rem);
}

.footer-notfound {
	display: none;
}

.footer:not(.footer-Home) {
	margin-bottom: 4em;
}

.footer-Home {
	margin-top: 1.25em;
}

.footer-Projects {
	margin-bottom: 2em;
	margin-top: -3em;
}

@media (max-width: 750px) {
	.footer-Home {
		margin-top: 1.5em;
	}
	.footer-Home.flexfoot {
		margin-bottom: 4.75em;
	}
	.footer {
		margin-bottom: -4em;
	}
}
</style>
