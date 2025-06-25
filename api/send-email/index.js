const fetch = require("node-fetch");

module.exports = async function (context, req) {
  console.log("✅ Function called");

  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: { "Allow": "POST" },
      body: "Method Not Allowed",
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    context.res = {
      status: 400,
      body: { error: "Missing required fields." },
    };
    return;
  }

  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const userId = process.env.USER_ID;

  if (!serviceId || !templateId || !userId) {
    context.res = {
      status: 500,
      body: { error: "Missing EmailJS configuration in environment variables" },
    };
    return;
  }

  try {
    const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
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

    if (!emailRes.ok) {
      const text = await emailRes.text();
      throw new Error(`EmailJS error: ${text}`);
    }

    const result = await emailRes.json();
    context.res = {
      status: 200,
      body: {
        message: "✅ Email sent successfully!",
        result,
      },
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: {
        error: err.message || "Unknown error",
      },
    };
  }
};
