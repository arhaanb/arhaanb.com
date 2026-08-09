import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const TOKEN_LIFETIME_DAYS = 180

const statePath = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	'spotify-token-state.json'
)

if (!fs.existsSync(statePath)) {
	console.error(
		'Missing spotify-token-state.json — run scripts/spotify-refresh-token.mjs to record the authorization date.'
	)
	process.exit(1)
}

const { issuedAt } = JSON.parse(fs.readFileSync(statePath, 'utf8'))
const issued = new Date(issuedAt)
if (Number.isNaN(issued.getTime())) {
	console.error(`Invalid issuedAt in state file: ${issuedAt}`)
	process.exit(1)
}

const daysRemaining =
	TOKEN_LIFETIME_DAYS - Math.floor((Date.now() - issued.getTime()) / 86400000)

console.log(daysRemaining)
