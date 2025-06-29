const nodemailer = require('nodemailer');

module.exports = async function (req) {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return {
      status: 400,
      body: "Missing required fields"
    };
  }
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New message: ${subject}`,
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `
  };

  const userConfirmationOptions = {
    from: `"RTV Solutions" <${process.env.EMAIL_TO}>`,
    to: email,
    subject: `We received your message, ${firstName}`,
    text: `Hi ${firstName},\n\nThank you for contacting RTV Solutions.\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h3>Hi ${firstName},</h3>
        <p>Thank you for contacting <strong>RTV Solutions</strong>. We’ve received your message and will respond shortly.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Your Message:</strong><br>${message}</p>
        <br/>
        <p>Regards,<br/>RTV Solutions Team</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userConfirmationOptions);

    return {
      status: 200,
      body: "Emails sent successfully"
    };
  } catch (error) {
    console.error("SendMail error:", error);
    return {
      status: 500,
      body: `Email sending failed: ${error.message}`
    };
  }
};
