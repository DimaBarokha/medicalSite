const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const sql = require("mssql");
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
    });
});

app.post("/api/patient", (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEMail = `
            <h1>Данные для записи пациента</h1>
            <h3>
                <ul style="list-style: none">   
                    <li><p>Имя пациента</p>${req.body.username}</li>
                    <li><p>Фамилия записи пациента</p>${req.body.lastname}</li>
                    <li><p>Дата записи пациента</p>${req.body.date}</li>
                    <li><p>Время записи пациента</p>${req.body.time}</li>
                    <li><p>email записи пациента</p>${req.body.email}</li>
                    <li><p>Мобильный телефон пациента</p>${req.body.mobile}</li>
                    <li><p>Возраст</p>${req.body.age}</li> 
                    <li><p>Услуга</p>МРТ</li> 
                    <li><p>Желаемый доктор</p>${req.body.doctor}</li>
                </ul>
                <h3>Жалобы(Пред)</h3>
                <p>${req.body.complaints}</p>
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
    });
});

const config = {
    server: 'DESKTOP-UHGQGHR',
    database: 'medical',
    user: 'user',
    password: '123123',

};
app.get('/branches', function (req, res) {
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query("Select * from Branch")
    }).then(result => {
        let rows = result.recordset
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json({data: rows});
        sql.close();
    }).catch(err => {
        res.status(500).send({message: "${err}"})
        sql.close();
    });

});
app.get('/prices', function (req, res) {
    new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query("Select id_service,title,price FROM Name_Services")
    }).then(result => {
        let rows = result.recordset
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json({data: rows});
        sql.close();
    }).catch(err => {
        res.status(500).send({message: "${err}"})
        sql.close();
    });

});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
});
