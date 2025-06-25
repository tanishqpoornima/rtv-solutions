const fetch = require("node-fetch"); // Not required if using Azure-hosted Static Web Apps — fetch is available

module.exports = async function (context, req) {
  context.log("📨 Incoming request to send-email");

  if (req.method !== "POST") {
    context.res = {
      status: 405,
      body: "Method Not Allowed",
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.USER_ID,
        template_params: {
          firstName,
          lastName,
          email,
          subject,
          message,
        },
      }),
    });

    const data = await response.json();

    context.res = {
      status: 200,
      body: {
        message: "✅ Email sent successfully!",
        emailjs_response: data,
      },
    };
  } catch (error) {
    context.log("❌ Error sending email:", error.message);
    context.res = {
      status: 500,
      body: {
        error: "Email sending failed",
        details: error.message,
      },
    };
  }
};
