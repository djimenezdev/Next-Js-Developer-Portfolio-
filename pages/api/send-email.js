const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    let info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `${name} has a message for you`,
      html: `Email:${email}<br/>Message:${message}`,
    });
    if (info) {
      res.json({ res: "success" });
    } else {
      res.json({ res: "Not successful" });
    }
  }
}
