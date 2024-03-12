const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "gamesplanitalia@gmail.com",
        pass: "xlhilwuuaxvcvznv",
    },
});

const sendMail = async ({ to, subject, html }) => {
    try {
        const result = await transporter.sendMail({
            from: "gamesplanitalia@gmail.com",
            to,
            subject,
            html,
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendMail
};