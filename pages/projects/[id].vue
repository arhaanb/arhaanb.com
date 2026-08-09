<script setup>
const { params } = useRoute()

const { data: localDoc } = await useAsyncData(`local-${params.id}`, () =>
	queryContent(`/projects/${params.id}`).findOne()
)

if (!localDoc.value?.body) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Page Not Found',
		fatal: true
	})
}

useHead({
	title: () => localDoc.value?.title,
	meta: [{ name: 'description', content: () => localDoc.value?.description }]
})

const STATUS_LABELS = {
	archived: 'No longer active',
	deprecated: 'No longer active',
	inactive: 'No longer active'
}

const statusLabel = computed(() => {
	const status = localDoc.value?.status
	return status ? STATUS_LABELS[status] || String(status) : ''
})

function formatDate(date) {
	if (!date) return ''
	const s = String(date)
	const m = s.match(/^(\d{4})-(\d{2})(?:-\d{2})?$/)
	if (m) {
		return new Date(Date.UTC(+m[1], +m[2] - 1, 1)).toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		})
	}
	const d = new Date(s)
	return isNaN(d) ? s : d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
</script>

<template>
	<main>
		<div class="cont md-post">
			<h1>{{ localDoc.title }}</h1>
			<div v-if="localDoc?.date || statusLabel" class="proj-meta">
				<span v-if="localDoc?.date" class="proj-meta-date">{{
					formatDate(localDoc.date)
				}}</span>
				<span v-if="statusLabel" class="proj-meta-status">{{
					statusLabel
				}}</span>
			</div>
			<ContentRenderer :value="localDoc" />
			<br />
		</div>
	</main>
</template>

<style>
/* local mdx content */
.md-post h1[id],
.md-post h2[id],
.md-post h3[id],
.md-post h4[id],
.md-post h5[id],
.md-post h6[id] {
	scroll-margin-top: 2em;
}

.md-post {
	font-family: var(--fontSans);
	color: #222;
	line-height: 1.6;
	max-width: 46em;
}

.md-post h1 {
	font-family: 'augillion', var(--fontSans);
	font-weight: 400;
	color: var(--red-text);
	font-size: 3em;
	line-height: 1.1;
	margin: 0 0 0.4em;
}

.md-post h2 {
	font-size: 1.35em;
	font-weight: 700;
	letter-spacing: -0.01em;
	margin: 2em 0 0.5em;
}

.md-post h3 {
	font-size: 1.15em;
	font-weight: 600;
	margin: 1.5em 0 0.4em;
}

.md-post p {
	font-size: 1.05em;
	line-height: 1.65;
	opacity: 0.9;
	margin: 0 0 1.1em;
}

.md-post ul {
	list-style: disc outside;
}

.md-post ol {
	list-style: decimal outside;
}

.md-post ul,
.md-post ol {
	margin: 0 0 1.2em;
	padding-left: 1.35em;
}

.md-post li {
	margin-bottom: 0.4em;
	padding-left: 0.25em;
	opacity: 0.9;
}

.md-post li::marker {
	color: var(--red-text);
}

.md-post img {
	width: 100%;
	height: auto;
	border-radius: 0.5em;
	margin: 1.25em 0;
	box-shadow: 0 2px 12px rgba(34, 34, 34, 0.1);
	border: 1px solid rgba(34, 34, 34, 0.08);
}

.md-post blockquote {
	margin: 1.25em 0;
	padding: 1em 1.25em;
	border-radius: 0.75em;
	background: rgba(146, 184, 250, 0.22);
	border: none;
	color: #222;
}

.md-post blockquote p {
	margin: 0;
	opacity: 1;
	font-weight: 600;
}

.md-post hr {
	margin: 2em 0;
	border: 0;
	border-top: 1px solid rgba(34, 34, 34, 0.15);
}

.proj-meta {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.75em;
	margin: 0 0 1.5em;
	font-family: var(--fontSans);
}

.proj-meta-date {
	font-size: 0.85em;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #666;
}

.proj-meta-status {
	font-size: 0.78em;
	font-weight: 600;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #fff;
	background: var(--red-text);
	border-radius: 999px;
	padding: 0.35em 0.9em;
}
</style>
