import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = await req.json();

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}