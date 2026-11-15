// tiny axios-shaped wrapper over nuxt's $fetch so components keep the
// `res.data` shape without bundling axios's node adapter into the worker
export const http = {
	get: (url) => $fetch(url).then((data) => ({ data })),
	post: (url, body) => $fetch(url, { method: 'POST', body }).then((data) => ({ data }))
}
