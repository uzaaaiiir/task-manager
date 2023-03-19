const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "uzair_mohiuddin@hotmail.com",
        subject: "Thanks for signing up!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "uzair_mohiuddin@hotmail.com",
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you again soon.\n\nPlease let us know if there was anything we could've done better.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};
