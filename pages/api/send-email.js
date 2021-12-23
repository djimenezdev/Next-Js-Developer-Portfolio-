const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.EMAIL_PASS);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    await sendGridMail
      .send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        templateId: process.env.EMAIL_ID_TWO,
        dynamicTemplateData: {
          contactSubject: `${name} has a message for you`,
          contactEmail: email,
          contactMessage: message,
        },
      })
      .then(
        async () => {
          await sendGridMail
            .send({
              from: process.env.EMAIL_FROM,
              to: email,
              replyTo: process.env.EMAIL_TO,
              templateId: process.env.EMAIL_ID,
              dynamicTemplateData: {
                name: name,
              },
            })
            .then(
              (response) => {
                res.json({ res: "success" });
              },
              (error) => {
                res.json({ res: "Not successful" });
              }
            );
        },
        (error) => {
          res.json({ res: "Not successful" });
        }
      );
  }
}
