// /api/send-email/index.js

import nodemailer from 'nodemailer';

export default async function (context, req) {
  // For local dev: req.body; for GET/URL test: req.query
  const data = req.body || req.query || {};

  const { firstName, lastName, email, subject, message } = data;

  if (!firstName || !lastName || !email || !subject || !message) {
    context.res = {
      status: 400,
      body: { error: "All fields are required." }
    };
    return;
  }

  // Use environment variables set in Azure portal for production
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Set in Azure App Settings
      pass: process.env.EMAIL_PASS
    }
  });

  // Email to admin
  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // Set in Azure App Settings
    replyTo: email,
    subject: `New message from ${firstName} ${lastName}: ${subject}`,
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr/>
        <p style="font-size: 0.9em; color: #555;">Sent via RTV Solutions website</p>
      </div>
    `
  };

  // Confirmation email to user
  const userMailOptions = {
    from: `"RTV Solutions" <${process.env.EMAIL_TO}>`,
    to: email,
    subject: `We received your message, ${firstName}`,
    text: `Hi ${firstName},\n\nThank you for contacting RTV Solutions. We’ve received your message and will get back to you soon.\n\nSubject: ${subject}\n\nYour message:\n${message}\n\nRegards,\nRTV Solutions`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h3>Hi ${firstName},</h3>
        <p>Thank you for contacting <strong>RTV Solutions</strong>. We’ve received your message and will get back to you soon.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Your message:</strong><br>${message}</p>
        <br/>
        <p>Regards,<br/>RTV Solutions Team</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    context.res = {
      status: 200,
      body: { message: "Emails sent successfully" }
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: "Failed to send emails", details: error.message }
    };
  }
}
