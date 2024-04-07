import letterboxd from 'letterboxd'

export default defineEventHandler(async (event) => {
	try {
		var items = await letterboxd('arhaanb')
		items = items.slice(0, 5)

		return { message: items }
	} catch (error) {
		return { message: error }
	}
})
