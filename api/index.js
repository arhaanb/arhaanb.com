var bcrypt = require('bcryptjs')
const express = require('express')
const fetch = require('node-fetch')
var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)

require('dotenv').config()

fs = require('fs')
const path = require('path')
const util = require('util')
const dirPath = path.join(__dirname, '/../lib/404.html')

const readFile = util.promisify(fs.readFile)

function getErr() {
	return readFile(dirPath, 'utf8')
}

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/gh/:repo', async (req, res, next) => {
	try {
		const repo = req.params.repo
		const { ok: yuh } = await fetch(
			`https://api.github.com/repos/arhaanb/${repo}`
		)

		if (yuh) {
			return res.redirect(302, `https://github.com/arhaanb/${repo}`)
		}

		getErr().then((data) => {
			return res.status(404).send(data)
		})
	} catch (e) {
		console.error(e)
	}
})

app.post('/api/shrtn', async (req, res) => {
	const { linkName, link, backlink, password } = req.body
	bcrypt.compare(password, process.env.SHRTN, function (err, result) {
		if (err) {
			console.log(err)
			return res.send({ error: true, err })
		} else {
			if (result === true) {
				base('Links')
					.select({
						maxRecords: 1,
						filterByFormula: `LOWER(resolvedUid) = "${backlink.toLowerCase()}"`,
					})
					.eachPage(
						function page(records) {
							if (records.length > 0) {
								return res.send({ error: true, message: 'Backlink in use.' })
							} else {
								base('Links').create(
									[
										{
											fields: {
												name: linkName,
												url: link,
												uid: backlink,
												disabled: false,
											},
										},
									],
									function (err, records) {
										if (err) {
											console.error(err)
											return res.send({ error: true, message: err })
										}
										//success
										return res.send({
											error: false,
											message: 'Link shortened succesfully.',
											backlink,
											link,
										})
									}
								)
							}
						},
						function done(err) {
							if (err) {
								console.error(err)
								return res.send({ error: true, message: err })
							}
						}
					)
			} else {
				return res.send({ error: true, message: 'Incorrect password.' })
			}
		}
	})
})

app.get('/*', async (req, res) => {
	const url = req.url.slice(1).toLowerCase()
	base('Links')
		.select({
			maxRecords: 1,
			filterByFormula: `resolvedUid = "${url}"`,
		})
		.eachPage(
			function page(records) {
				if (records.length > 0) {
					if (records[0].get('disabled') === true) {
						getErr().then((data) => {
							return res.status(404).send(data)
						})
					} else {
						var redirectUri = records[0].get('url')
						return res.status(302).redirect(redirectUri)
					}
				} else {
					getErr().then((data) => {
						return res.status(404).send(data)
					})
				}
			},
			function done(err) {
				if (err) {
					console.error(err)
					getErr().then((data) => {
						return res.status(404).send(data)
					})
				}
			}
		)
})

app.get('/api/contact', (req, res) => {
	return res.send('test')
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
	if (err) throw err
})
