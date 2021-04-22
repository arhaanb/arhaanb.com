<template>
	<div class="home">
		<router-link class="back" to="/">&larr;</router-link>
		<div class="container-sml">
			<h1 class="title">Yo what's up</h1>
			<p>Send me a message! im lonely. hepl.</p>
			<form action="">
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
			</form>
		</div>
	</div>
</template>


<style scoped>
.forofour {
	border: none;
	opacity: 1;
	color: rgb(8, 75, 119);
}

.forofour:hover {
	opacity: 0.75;
}

.container-sml {
	margin: 0 auto;
	padding: 0 2em;
	max-width: 25em;
}
</style>