<template>
	<div class="cont">
		<h2 class="title">Hey</h2>
		<p class="sub">
			Let's talk. Let me know what you think about this website! Or let's work
			together on a project! I'll try to get back to you as soon as possible.
		</p>

		<div class="row">
			<div class="flex-center">
				<div class="seven columns">
					<form>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Email" />
						<textarea type="text" placeholder="Anything you wanna say" />

						<div class="flex-center">
							<button type="submit">Send</button>
						</div>
					</form>
				</div>
			</div>

			<p>You could also text me on one of my socials given below.</p>

			<!-- <div class="six columns">
				<h5 style="font-size: 1.2em">
					You can also message me on one of these platforms.
				</h5>

				<div class="socials">
				</div>
			</div> -->
		</div>
	</div>
</template>

<style scoped>
input,
textarea {
	min-width: 100%;
	max-width: 100%;
	font-family: 'Colfax';
}

textarea {
	min-height: 6em;
}

textarea:focus {
	border-color: #69e;
}

input:focus {
	border-color: #69e !important;
}
</style>
