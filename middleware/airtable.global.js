import Airtable from 'airtable'

var base = new Airtable({
	apiKey:
		'patC0OlDvuqXjhtCH.ba4c7c494a49ac494676c40e3f5c68665b7b1982907330f63a5be14d41868e57'
}).base('app9zWIBRbLvBx5yc')

export default defineNuxtRouteMiddleware(async (to, from) => {
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

	const url = to.path.slice(1).toLowerCase()

	try {
		await base('Links')
			.select({
				maxRecords: 1,
				filterByFormula: `resolvedUid = "${url}"`
			})
			.eachPage(
				function page(records) {
					if (records.length > 0) {
						if (records[0].get('disabled') === true) {
							return abortNavigation()
						} else {
							var redirectUri = records[0].get('url')
							return navigateTo(redirectUri, { external: true })
						}
					} else {
						return abortNavigation()
					}
				},
				function done(err) {
					if (err) {
						console.error(err)
						return abortNavigation()
					}
				}
			)
	} catch (error) {
		return abortNavigation(error)
	}
})
