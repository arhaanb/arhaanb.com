<template>
	<main class="error-page">
		<SiteNav />
		<NotFound class="error-body" />
		<div class="cont">
			<Footer class="footer" />
		</div>
	</main>
</template>

<style lang="scss">
.error-page {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.error-body {
	flex: 1;
	display: flex;
}

.error-page .cont {
	width: 100%;
}
</style>
