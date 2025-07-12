import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  const { EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, EMAIL_TO } = process.env

  const missingVars = []
  if (!EMAIL_SERVER_HOST) missingVars.push('EMAIL_SERVER_HOST')
  if (!EMAIL_SERVER_PORT) missingVars.push('EMAIL_SERVER_PORT')
  if (!EMAIL_SERVER_USER) missingVars.push('EMAIL_SERVER_USER')
  if (!EMAIL_SERVER_PASSWORD) missingVars.push('EMAIL_SERVER_PASSWORD')
  if (!EMAIL_TO) missingVars.push('EMAIL_TO')

  if (missingVars.length > 0) {
    console.error('Missing environment variables for email configuration:', missingVars.join(', '))
    return NextResponse.json({ error: `Server configuration error: missing ${missingVars.join(', ')}.` }, { status: 500 })
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: EMAIL_SERVER_HOST,
    port: Number(EMAIL_SERVER_PORT),
    secure: Number(EMAIL_SERVER_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD,
    },
  })

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    replyTo: email,
    subject: 'New Contact Form Submission', // Subject line
    text: message, // plain text body
    html: `<b>From:</b> ${name}<br/><b>Email:</b> ${email}<br/><br/><b>Message:</b><br/>${message}`, // html body
  }

  try {
    // Send mail
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
} 