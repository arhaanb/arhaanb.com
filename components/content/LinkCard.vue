<template>
	<a
		:href="href"
		target="_blank"
		rel="noopener noreferrer"
		class="linkcard"
		:style="{ '--accent': site?.color || 'var(--red-text)' }"
	>
		<div class="linkcard-icon" :class="{ brand: site?.color }">
			<img
				v-if="avatar || favicon"
				:src="avatar || favicon"
				alt=""
				loading="lazy"
				@error="faviconFailed = true"
			/>
			<iconify-icon v-else :icon="tileIcon" />
		</div>

		<div class="linkcard-body">
			<h4 class="linkcard-title">{{ title }}</h4>
			<p class="linkcard-desc">{{ displayDesc }}</p>

			<div class="linkcard-meta">
				<span class="badge">{{ site?.label || 'Website' }}</span>
				<span class="domain">{{ urlDisplay }}</span>

				<template v-if="repo">
					<span class="gh-stat">
						<iconify-icon icon="mdi:star-outline" />
						{{ fmt(repo.stargazers_count) }}
					</span>
					<span class="gh-stat" v-if="repo.forks_count">
						<iconify-icon icon="mdi:source-fork" />
						{{ fmt(repo.forks_count) }}
					</span>
					<span class="gh-stat" v-if="repo.language">
						<span
							class="lang-dot"
							:style="{ background: langColor(repo.language) }"
						></span>
						{{ repo.language }}
					</span>
				</template>
			</div>
		</div>

		<span class="linkcard-arrow">
			<iconify-icon icon="mdi:arrow-top-right" />
		</span>
	</a>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
	href: { type: String, required: true },
	title: { type: String, required: true },
	desc: { type: String, default: '' }
})

const url = computed(() => {
	try {
		return new URL(props.href)
	} catch {
		return null
	}
})

const hostname = computed(() =>
	(url.value?.hostname || '').replace(/^www\./, '')
)

const SITES = {
	'github.com': { label: 'GitHub', icon: 'mdi:github', color: '#24292f' },
	'youtube.com': { label: 'YouTube', icon: 'mdi:youtube', color: '#ff0000' },
	'youtu.be': { label: 'YouTube', icon: 'mdi:youtube', color: '#ff0000' },
	'behance.net': { label: 'Behance', icon: 'mdi:behance', color: '#1769ff' },
	'apps.apple.com': { label: 'App Store', icon: 'mdi:apple', color: '#0d93f4' },
	'play.google.com': {
		label: 'Google Play',
		icon: 'mdi:google-play',
		color: '#00c46c'
	},
	'figma.com': { label: 'Figma', icon: 'mdi:figma', color: '#a259ff' },
	'drive.google.com': {
		label: 'Google Drive',
		icon: 'mdi:google-drive',
		color: '#1a73e8'
	}
}

const site = computed(() => SITES[hostname.value] || null)

const tileIcon = computed(() => site.value?.icon || 'mdi:link-variant')

const faviconFailed = ref(false)

const favicon = computed(() => {
	if (site.value?.color || faviconFailed.value || !url.value) return ''
	return new URL('/favicon.ico', props.href).href
})

const ghMatch = computed(() => {
	if (hostname.value !== 'github.com') return null
	const parts = (url.value?.pathname || '').split('/').filter(Boolean)
	return parts.length >= 2 ? { owner: parts[0], repo: parts[1] } : null
})

const repo = ref(null)
const repoDescription = computed(() => repo.value?.description || '')

const SITE_DESCS = {
	GitHub: 'View the repository on GitHub',
	YouTube: 'Watch on YouTube',
	Behance: 'View the case study on Behance',
	'App Store': 'Available on the App Store',
	'Google Play': 'Available on Google Play',
	Figma: 'Open the design in Figma',
	'Google Drive': 'Open in Google Drive'
}

const autoDesc = computed(
	() =>
		(site.value?.label && SITE_DESCS[site.value.label]) || 'Visit the website'
)

const urlDisplay = computed(() => {
	if (!url.value) return ''
	const path = url.value.pathname + url.value.search
	return path && path !== '/' ? `${hostname.value}${path}` : hostname.value
})

const isBareLink = computed(() => {
	const d = (props.desc || '').trim().toLowerCase()
	if (!d) return false
	return (
		d === hostname.value.toLowerCase() || d === urlDisplay.value.toLowerCase()
	)
})

const displayDesc = computed(() => {
	if (repoDescription.value) return repoDescription.value
	if (!isBareLink.value && props.desc) return props.desc
	return autoDesc.value
})

onMounted(async () => {
	if (!ghMatch.value) return
	try {
		const res = await fetch(
			`https://api.github.com/repos/${ghMatch.value.owner}/${ghMatch.value.repo}`,
			{ headers: { Accept: 'application/vnd.github+json' } }
		)
		if (res.ok) repo.value = await res.json()
	} catch {
		/* keep static fallback */
	}
})

const avatar = computed(() => repo.value?.owner?.avatar_url || '')

const LANG_COLORS = {
	JavaScript: '#f1e05a',
	TypeScript: '#3178c6',
	Dart: '#00B4AB',
	Python: '#3572A5',
	Java: '#b07219',
	Kotlin: '#A97BFF',
	Swift: '#F05138',
	'C#': '#178600',
	'C++': '#f34b7d',
	Go: '#00ADD8',
	Ruby: '#701516',
	Rust: '#dea584',
	PHP: '#4F5D95',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Shell: '#89e051'
}

function langColor(lang) {
	return LANG_COLORS[lang] || '#8b949e'
}

function fmt(n) {
	if (!n) return '0'
	if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
	return String(n)
}
</script>

<style scoped>
.linkcard {
	position: relative;
	display: flex;
	align-items: flex-start;
	gap: 1em;
	padding: 1em 1.15em;
	border-radius: 0.9em;
	background: #fff;
	border: 1.5px solid #222;
	color: #222;
	transition: 0.25s ease;
	margin: 0.9em 0;
}
.linkcard:hover {
	transform: translateY(-2px);
	border-color: var(--accent);
	box-shadow: 0 8px 24px rgba(34, 34, 34, 0.08);
}

.linkcard-icon {
	width: 2.75em;
	height: 2.75em;
	flex-shrink: 0;
	border-radius: 0.6em;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(34, 34, 34, 0.12);
	background: #faf5ec;
	overflow: hidden;
}
.linkcard-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}
.linkcard-icon.brand {
	background: rgba(0, 0, 0, 0.03);
	color: var(--accent);
}
.linkcard-icon.brand iconify-icon {
	font-size: 1.5em;
}

.linkcard-body {
	flex: 1;
	min-width: 0;
}
.linkcard-title {
	margin: 0.05em 0 0;
	font-size: 1.02em;
	font-weight: 700;
	line-height: 1.3;
	color: #222;
}
.linkcard-desc {
	margin: 0.2em 0 0.5em;
	font-size: 0.9em;
	opacity: 0.7;
	color: #222;
}
.linkcard-meta {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5em 0.7em;
	font-size: 0.76em;
}
.badge {
	font-weight: 700;
	letter-spacing: 0.02em;
	color: var(--accent);
	background: #f5f1ea;
	border: 1px solid rgba(34, 34, 34, 0.08);
	padding: 0.18em 0.65em;
	border-radius: 999px;
}
.domain {
	opacity: 0.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
	min-width: 0;
}
.gh-stat {
	display: inline-flex;
	align-items: center;
	gap: 0.3em;
	opacity: 0.75;
}
.gh-stat iconify-icon {
	font-size: 1.05em;
}
.lang-dot {
	width: 0.6em;
	height: 0.6em;
	border-radius: 50%;
	display: inline-block;
}

.linkcard-arrow {
	font-size: 1.2em;
	flex-shrink: 0;
	color: #222;
	opacity: 0.45;
	margin-top: 0.15em;
	transition: 0.25s ease;
}
.linkcard:hover .linkcard-arrow {
	opacity: 1;
	color: var(--accent);
	transform: translate(2px, -2px);
}
</style>
