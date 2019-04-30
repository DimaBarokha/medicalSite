const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/form", (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEMail = `
            <h3>
                <ul>
                    <li>${req.body.name}</li>
                    <li>${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            </h3>
        `;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "medicalhosad@gmail.com", // generated ethereal user
                pass: "1201884A" // generated ethereal password
            }
        });

        let mailOptions = {
            from: `${req.body.email}`, // sender address
            to: `medicalhosad@gmail.com`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: req.body.message, // plain text body
            html: htmlEMail // html body
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
        });
        // console.log("Message sent: %s", info.message);
        // Preview only available when sending through an Ethereal account
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
});
