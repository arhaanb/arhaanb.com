const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
	const { name, email, message } = req.body

	const emailBody = `<strong>${name}</strong> sent you this message:
	<br /><br />
	${message}
	<br /><br />
	Get back to them at <a href="mailto:${email}">${email}</a>`

	const msg = {
		from: 'web@arhn.us',
		to: 'arhaanb+web@gmail.com',
		subject: `${name} sent you a message.`,
		text: emailBody,
		html: emailBody
	}

	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent')
			return res.send({ body: req.body, message: 'Success', error: false })
		})
		.catch((error) => {
			console.error(error)
			return res.send({ body: req.body, message: error, error: true })
		})
}
