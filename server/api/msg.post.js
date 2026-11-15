// contact form → cloudflare email routing (send_email binding, see wrangler.jsonc).
// on the free plan this can only deliver to a verified destination address,
// which is exactly what a "message me" form needs.
import { EmailMessage } from 'cloudflare:email'

const FROM = 'web@arhaanb.com'
const TO = 'arhaanb@gmail.com'

// strip anything that could break out of a mime header
const headerSafe = (str) => String(str).replace(/[\r\n]+/g, ' ').trim()

const escapeHtml = (str) =>
	String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')

// rfc 2047 encoded-word so names with emoji / non-latin chars survive
const encodeHeader = (str) => {
	const bytes = new TextEncoder().encode(str)
	let bin = ''
	for (const b of bytes) bin += String.fromCharCode(b)
	return `=?UTF-8?B?${btoa(bin)}?=`
}

// base64 body wrapped at 76 chars per rfc 2045
const encodeBody = (str) => {
	const bytes = new TextEncoder().encode(str)
	let bin = ''
	for (const b of bytes) bin += String.fromCharCode(b)
	return btoa(bin).replace(/.{1,76}/g, '$&\r\n')
}

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/

function buildMime({ name, email, message }) {
	const boundary = `b_${crypto.randomUUID()}`
	const text = `${name} sent you this message:\n\n${message}\n\n---\nGet back to them at ${email}`
	const html = `<strong>${escapeHtml(name)}</strong> sent you this message:
<br /><br />
${escapeHtml(message).replace(/\r?\n/g, '<br>')}
<br /><br />
--- <br />
Get back to them at <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`

	return [
		`From: "arhaanb.com" <${FROM}>`,
		`To: <${TO}>`,
		`Reply-To: <${email}>`,
		`Subject: ${encodeHeader(`[arhaanb.com] ${name} sent you a message.`)}`,
		`Message-ID: <${crypto.randomUUID()}@arhaanb.com>`,
		`Date: ${new Date().toUTCString()}`,
		'MIME-Version: 1.0',
		`Content-Type: multipart/alternative; boundary="${boundary}"`,
		'',
		`--${boundary}`,
		'Content-Type: text/plain; charset=UTF-8',
		'Content-Transfer-Encoding: base64',
		'',
		encodeBody(text),
		`--${boundary}`,
		'Content-Type: text/html; charset=UTF-8',
		'Content-Transfer-Encoding: base64',
		'',
		encodeBody(html),
		`--${boundary}--`,
		''
	].join('\r\n')
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event).catch(() => null)
	if (!body) return { message: 'Only POST stuff here.' }

	const name = headerSafe(body.name || '').slice(0, 200)
	const email = headerSafe(body.email || '').slice(0, 320)
	const message = String(body.message || '').slice(0, 10000)

	if (!name || !message || !EMAIL_RE.test(email)) {
		return { body, message: 'Please fill in your name, a valid email and a message.', error: true }
	}

	const sender = event.context.cloudflare?.env?.SEND_EMAIL
	if (!sender) {
		console.error('SEND_EMAIL binding is not configured')
		return { body, message: 'Email is not configured.', error: true }
	}

	try {
		await sender.send(new EmailMessage(FROM, TO, buildMime({ name, email, message })))
		return { body, message: 'Success', error: false }
	} catch (error) {
		console.error('contact form send failed', error)
		return { body, message: error?.message || String(error), error: true }
	}
})
