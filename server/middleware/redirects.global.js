import { redirects } from '../lib/redirects'

function convertAndTrim(str) {
	str = str.toLowerCase()
	if (str.charAt(0) === '/') str = str.slice(1)
	if (str.charAt(str.length - 1) === '/') str = str.slice(0, -1)
	return str
}

function fetchRedirectUrl(pathname) {
	const key = convertAndTrim(pathname)

	const match = redirects.find((r) => r.path === key && r.disabled !== true)
	return match ? match.url : null
}

export default defineEventHandler(async (event) => {
	const urlObj = getRequestURL(event)
	const redirect = fetchRedirectUrl(urlObj.pathname)

	if (redirect) {
		return sendRedirect(event, redirect, 301)
	}
})
