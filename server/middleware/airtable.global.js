import Airtable from 'airtable'

var base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID)

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
								resolve(null)
							}
						} else {
							resolve(null)
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

	if (urlObj.pathname != '/__nuxt_error') {
		try {
			const redirect = await fetchRedirectUrl(urlObj)
			if (redirect) {
				await sendRedirect(event, redirect, 301)
			} else {
				return
			}
		} catch (error) {
			return
		}
	}
})
