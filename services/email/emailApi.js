const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SUBJECTS_TEMPLATE = {
    registration: "Thank you for registration!",
};

const sendEmail = async (email, subject, text) => {
    const SENDER = process.env.SENDGRID_SENDER;

    const msg = {
        to: email,
        from: SENDER,
        subject: SUBJECTS_TEMPLATE[subject],
        text: text,
        html: `<h4>${text}</h4>`,
    };
    await sgMail.send(msg);
};

module.exports = sendEmail;
