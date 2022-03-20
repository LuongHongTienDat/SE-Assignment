const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSEMAIL,
            },
        });
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;