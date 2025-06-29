import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function sendEmail(req, res) {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // 📨 Email to Admin (you)
  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
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
        <p style="font-size: 0.9em; color: #555;">Sent via Nodemailer backend</p>
      </div>
    `
  };

  // 📩 Email to User (confirmation)
  const userMailOptions = {
    from: `"RTV Solutions" <${process.env.EMAIL_TO}>`, // this will be the official sender
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
    // Send to admin
    await transporter.sendMail(adminMailOptions);
    console.log("✅ Email sent to admin");

    // Send to user
    await transporter.sendMail(userMailOptions);
    console.log("✅ Confirmation email sent to user");

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ error: "Failed to send emails", details: error.message });
  }
}
