import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import handlebars from "handlebars";
type Data = {
  name: string
}


const  handler = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) =>{
  const body = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: body.title,
        html: `
          <p>Bonjour,</p>
          <p>Vous avez un nouveau ${body.firstName} ${body.lastName}</p>
          <p>Son mail est ${body.email}</p>
          <p>Son téléphone est ${body.phone}</p>
          <p>Son message</p>
          <div>${body.message}</div>
        `
    })
    
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ name: 'John Doe' })
}

export default handler;