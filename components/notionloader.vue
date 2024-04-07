<template>
	<div class="loadind">
		<div class="loader"></div>
		<h3 class="fancy loadtext">loading...</h3>
	</div>
</template>

<style scoped>
/* Loader */
.loadind {
	height: 71vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.loadtext {
	text-align: center;
	font-size: 1.8em;
	margin-top: 0.75em;
}
.loader,
.loader:after {
	border-radius: 100%;
	width: 3.5em;
	height: 3.5em;
}
.loader {
	--bor-wid: 0.7em;
	margin: 0 auto;
	font-size: 10px;
	position: relative;
	border: var(--bor-wid) solid rgba(0, 0, 0, 0.2);
	/* border-right: 1.1em solid rgba(0, 0, 0, 0.2);
	border-bottom: 1.1em solid rgba(0, 0, 0, 0.2); */
	border-left: var(--bor-wid) solid var(--red-text);
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load8 1.1s infinite linear;
	animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
