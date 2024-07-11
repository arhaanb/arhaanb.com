import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
			from: 'web@arhaanb.com',
			to: 'arhaanb+web@gmail.com',
			subject: `${name} sent you a message.`,
			text: emailBody,
			html: emailBody
		}

		try {
			await sgMail.send(msg)
			console.log('Email sent')
			return { body, message: 'Success', error: false }
		} catch (error) {
			console.error(error)
			return { body, message: error, error: true }
		}
	} else {
		return { message: 'Only POST stuff here.' }
	}
})
