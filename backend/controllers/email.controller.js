import nodemailer from "nodemailer";

const contactEmail = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
        user: "sandrakhalek@hotmail.com",
        pass: "123thiAbc456dergkLL9",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Ready to Send");
    }
});

export const sendEmail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: email,
        to: "sandrakhalek@hotmail.com",
        subject: "Portfolio Message",
        html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "failed" });
        } else {
            res.json({ status: "sent" });
        }
    });
};