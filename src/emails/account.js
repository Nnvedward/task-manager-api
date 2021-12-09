const Mailgun = require('mailgun.js')
const formData = require('form-data')

const domain = 'sandboxfceebac096f54ec8b7b0a3be2cf37497.mailgun.org'

const mailgun = new Mailgun(formData)
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY})

const sendWelcomeEmail = (email, name) => {
    const messageData = {
        from: 'nnvedward@gmail.com',
        to: email,
        subject: 'Welcome to MyTaskApp!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
      }
      client.messages.create(domain, messageData)
}

const sendCancelEmail = (email, name) => {
    const messageData = {
        from: 'nnvedward@gmail.com',
        to: email,
        subject: 'Cancellation to MyTaskApp!',
        text: `Dear ${name}, You cancelled your subscription. Could we have helped you better?`
      }
      client.messages.create(domain, messageData)
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}