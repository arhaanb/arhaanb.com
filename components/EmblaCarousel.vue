<script setup lang="ts">
const items = [
	{
		name: 'Spotivity',
		desc: 'Spotivity is an app that let’s you see what music your friends are listening to.',
		link: 'https://spotivity.me',
		img: 'https://res.cloudinary.com/arhaanb/image/upload/spotivity.png'
	},
	{
		name: 'Sparsh',
		desc: 'An accessible tap to pay network for UPI in India. 1st prize, Redbrick Hacks at Ashoka University.',
		img: '/projects/sparsh.png',
		link: '/projects/sparsh'
	},
	{
		name: 'PAYOUT.',
		img: 'https://res.cloudinary.com/arhaanb/image/upload/v1656856077/payout.png',
		desc: 'An equity-based crowdfunding platform for startups. Get funded, quick.',
		link: '/projects/payout'
	},
	{
		name: 'Vipriya',
		img: '/projects/vipriya.png',
		desc: 'A dating app that matches you based on your music taste.',
		link: '/projects/vipriya'
	},

	{
		name: 'CoachIn',
		desc: 'Upskill yourself with coaches near you! CoachIn connects you with experts around your area.',
		img: 'https://coachin.in/og.png?948539',
		link: 'https://coachin.in'
	},
	{
		name: 'Cricket Bat Company',
		img: '/projects/cbc.png',
		desc: 'Empowering you to buy the right Cricket bat by analysing your play style.',
		link: 'https://cricketbatcompany.com'
	},
	{
		name: 'SOMA',
		desc: 'An e-commerce store selling handmade, luxury, ayurveda beauty products.',
		img: 'https://www.mysoma.in/cdn/shop/files/1_c917d4a0-8958-4448-9183-23a5a4187dbc.jpg?v=1702746135&width=990',
		link: 'https://mysoma.in'
	}
	// {
	// 	name: 'Equitree (with TopBar)',
	// 	img: 'https://equitree.vercel.app/og-image.png',
	// 	desc: 'Private Equity investors - PMS for high net worth individuals. Built in association with TopBar.',
	// 	link: 'https://equitree.vercel.app'
	// },
	// { name: 'Feet on Street (with TechBrig)' },
]

// Track the current index of the carousel
const currentIndex = ref()

// Calculate the progress based on the current slide index
const progress = computed(() => ((currentIndex.value + 1) / items.length) * 100)
</script>

<template>
	<main>
		<UCarousel
			:items="items"
			class="rounded-lg overflow-hidden carousel lg:px-10"
			:ui="{ item: 'snap-start basis-[80%] md:basis-1/2 lg:basis-[30%]' }"
			v-model="currentIndex"
			ref="currentIndex"
		>
			<!-- indicators -->
			<!-- <img :src="item" class="w-full" draggable="false" /> -->
			<template #default="{ item }">
				<!-- <h1>hello</h1> -->
				<!-- <img :src="item" class="w-full car-item" draggable="false" /> -->
				<ProjectCard :item="item" />
			</template>

			<!-- <template #prev="{ onClick, disabled }">
				<div class="navcont">
					<button :disabled="disabled" @click="onClick">&larr;</button>
				</div>
			</template>

			<template #next="{ onClick, disabled }">
				<div class="navcont">
					<button :disabled="disabled" @click="onClick">&rarr;</button>
				</div>
			</template> -->

			<!-- <template #indicator="{ onClick, page, active }">
				<UButton
					:label="String(page)"
					:variant="active ? 'solid' : 'outline'"
					size="2xs"
					class="rounded-full min-w-6 justify-center"
					@click="onClick(page)"
				/>

			</template> -->
		</UCarousel>

		<div class="cont">
			<div class="progress">
				<div class="btns">
					<button
						:disabled="currentIndex?.page == 1"
						@click="currentIndex.prev()"
					>
						&larr;
					</button>
					<button
						:disabled="currentIndex?.page == currentIndex?.pages"
						@click="currentIndex.next()"
					>
						&rarr;
					</button>
				</div>
				<div class="progressbar">
					<UProgress
						size="xl"
						:value="
							currentIndex?.page == 1
								? 0
								: ((currentIndex?.page - 1) / (currentIndex?.pages - 1)) *
										100 || 0
						"
						color="orange"
						animation="elastic"
						class="custom-progress"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.custom-basis {
	flex-basis: 80%;
}

.progress {
	.progressbar {
		// flex: 2;
		width: 30%;
		.custom-progress progress {
			&::-webkit-progress-bar {
				border: 1px solid;
				border-color: rgba($color: orange, $alpha: 1);
				background-color: transparent !important; /* Equivalent to Tailwind's gray-200 */
			}
		}
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	.btns {
		display: flex;
		gap: 1em;
		flex: 1;
	}
	button {
		margin-top: 1em;
		width: 2em !important;
		border-radius: 100em;
		height: 2em !important;
		display: flex;

		justify-content: center;
		align-items: center;
		padding: 1.1em !important;
		font-size: 1.1em;
		line-height: unset;
		border-color: #8a8a8a8a;
		&:active,
		&:focus {
			border-color: #8a8a8a8a;
		}
		&:disabled {
			opacity: 0.2;
			color: inherit !important;
			border-color: #eaeaea;
			&:hover {
				opacity: 0.2;
				border-color: #eaeaea;
			}
		}
	}
}
.car-item {
	margin-right: 2em;
}
.carousel {
	img {
		margin-right: 1em;
	}
}

@media (max-width: 750px) {
	.progress {
		gap: 2em;
		button {
			font-size: 1em;
		}
	}
}
</style>
