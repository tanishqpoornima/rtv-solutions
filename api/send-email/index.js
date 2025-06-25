const fetch = require("node-fetch");

module.exports = async function (context, req) {
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: { 'Allow': 'POST' },
      body: "Method Not Allowed",
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    context.res = {
      status: 400,
      body: { error: "Missing required fields." },
    };
    return;
  }

  // EmailJS params from Azure App Settings (safe from frontend exposure)
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const userId = process.env.USER_ID;

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: {
          firstName,
          lastName,
          email,
          subject,
          message,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const result = await response.json();

    context.res = {
      status: 200,
      body: {
        message: "✅ Email sent successfully!",
        result,
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        message: "❌ Failed to send email",
        error: error.message,
      },
    };
  }
};
