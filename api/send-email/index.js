const fetch = require("node-fetch");

module.exports = async function (context, req) {
  try {
    console.log(req);
    if (req.method !== "POST") {
      context.res = {
        status: 405,
        headers: { 'Allow': 'POST' },
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
      context.log("Missing one or more EmailJS env vars:", {
        serviceId,
        templateId,
        userId,
      });

      context.res = {
        status: 500,
        body: {
          message: "Email service is not configured properly (missing environment variables)",
        },
      };
      return;
    }

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
      const errorText = await emailRes.text();
      throw new Error(`EmailJS API error: ${errorText}`);
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
    context.log("🔥 Error:", err); // log in Azure
    context.res = {
      status: 500,
      body: {
        message: "❌ Internal Server Error",
        error: err.message || "Unknown error",
      },
    };
  }
};
