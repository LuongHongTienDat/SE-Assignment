const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

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

        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };
        
        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            template: 'email', // the name of the template file i.e email.handlebars
            context:{
                link: text, // replace {{name}} with Adebola
            }
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;