const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_APIKEY

sgMail.setApiKey(sendgridAPIKey)
const emailSender = process.env.EMAIL_SENDER


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: emailSender,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
    }).then( () => console.log('Email sent!'))
    .catch(error => console.log(error))
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: emailSender,
        subject: 'See you!',
        text: `Hello ${name}. Your account has been cancelled, we expect to see you soon.`,
    }).then( result => console.log('Email sent!'))
    .catch(error => console.log(error))
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
