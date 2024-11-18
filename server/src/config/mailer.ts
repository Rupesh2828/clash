import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  
  export const sendMail = async (to: string, subject: string, body: string) => {
    try {
        await transporter.sendMail({
            from: process.env.FROM_EMAIL, // sender address
            to,
            subject, // Subject line
            html: body, // html body
        });
        console.log(`Email sent successfully to ${to}`);
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        throw error;
    }
};
