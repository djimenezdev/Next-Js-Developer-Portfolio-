import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.EMAIL_PASS);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === 'POST') {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

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
          await sendGridMail.send({
            from: process.env.EMAIL_FROM,
            to: email,
            replyTo: process.env.EMAIL_TO,
            templateId: process.env.EMAIL_ID,
            dynamicTemplateData: {
              name: name,
            },
          });
          res.json({ res: 'success' });
        },
        (error: any) => {
          res.json({ res: 'Not successful' });
        }
      );
  }
}
