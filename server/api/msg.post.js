// SendGrid via its REST API (plain fetch) so it runs on Cloudflare Workers
const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/mail/send'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	if (body) {
		const { name, email, message } = body
		console.log({ name, email, message })

		function newLine(str) {
			return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
		}

		const emailBody = `<strong>${name}</strong> sent you this message:
		<br /><br />
		${newLine(message)}
		<br /><br />
		--- <br />
		Get back to them at <a href="mailto:${email}">${email}</a>`

		const msg = {
			personalizations: [{ to: [{ email: 'arhaanb+web@gmail.com' }] }],
			from: { email: 'web@arhaanb.com' },
			subject: `${name} sent you a message.`,
			content: [
				{ type: 'text/plain', value: emailBody },
				{ type: 'text/html', value: emailBody }
			]
		}

		try {
			const res = await fetch(SENDGRID_ENDPOINT, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(msg)
			})
			if (!res.ok) {
				throw new Error(`SendGrid error ${res.status}: ${await res.text()}`)
			}
			console.log('Email sent')
			return { body, message: 'Success', error: false }
		} catch (error) {
			console.error(error)
			return { body, message: error.message || error, error: true }
		}
	} else {
		return { message: 'Only POST stuff here.' }
	}
})
