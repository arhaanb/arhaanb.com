import Airtable from 'airtable'

var base = new Airtable({
	apiKey:
		'patC0OlDvuqXjhtCH.ba4c7c494a49ac494676c40e3f5c68665b7b1982907330f63a5be14d41868e57'
}).base('app9zWIBRbLvBx5yc')

function convertAndTrim(str) {
	str = str.toLowerCase()
	if (str.charAt(0) === '/') {
		str = str.slice(1)
	}
	if (str.charAt(str.length - 1) === '/') {
		str = str.slice(0, -1)
	}
	return str
}

function fetchRedirectUrl(urlObj) {
	return new Promise((resolve, reject) => {
		base('Links')
			.select({
				maxRecords: 1,
				filterByFormula: `resolvedUid = "${convertAndTrim(urlObj.pathname)}"`
			})
			.eachPage(
				function page(records, fetchNextPage) {
					try {
						if (records.length > 0) {
							if (records[0].get('disabled') !== true) {
								const redirectUri = records[0].get('url')
								resolve(redirectUri)
							} else {
								resolve(null) // No redirect, resolve with null
							}
						} else {
							resolve(null) // No records found, resolve with null
						}
					} catch (err) {
						reject(err)
					}
				},
				function done(err) {
					if (err) {
						reject(err)
					}
				}
			)
	})
}

export default defineEventHandler(async (event) => {
	const urlObj = getRequestURL(event)
	// if (urlObj.pathname === '/__nuxt_error') return
	console.log(urlObj.pathname)

	// don't touch error routes
	if (urlObj.pathname != '/__nuxt_error') {
		// detect other conditions and redirect to a new url

		// // const urlSearchParams = getRequestURL(event).searchParams
		// if (process.server) {
		// 	const url = event.node.req.url
		// 	console.log(url)
		// }
		try {
			const redirect = await fetchRedirectUrl(urlObj)
			console.log(redirect)
			await sendRedirect(event, redirect, 301)
		} catch (error) {
			return
		}
	}
})
