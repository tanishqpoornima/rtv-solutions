const emailjs = require("emailjs-com");

module.exports = async function (context, req) {
  console.log("context")
  console.log(context)
  console.log(req)
  
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      body: "Method Not Allowed",
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    const result = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
      process.env.USER_ID
    );

    context.res = {
      status: 200,
      body: {
        message: "Email sent using emailjs-com",
        result,
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        error: "Email sending failed",
        details: error.text || error.message,
      },
    };
  }
};
