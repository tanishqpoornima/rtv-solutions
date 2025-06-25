const fetch = require('node-fetch'); // Node.js-compatible fetch

module.exports = async function (context, req) {
  console.log("INSIDE THE EMAIL.jS request");
  console.log(req);
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: "Method Not Allowed",
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;
  console.log("INSIDE THE EMAIL.jS");
  console.log(process.env.SERVICE_ID);
  console.log(process.env.TEMPLATE_ID);
  console.log(process.env.USER_ID);
  
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.USER_ID,
        template_params: {
          firstName,
          lastName,
          email,
          subject,
          message
        }
      })
    });

    const result = await response.json();

    context.res = {
      status: 200,
      body: { message: 'Email sent', result }
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: 'Failed to send email', details: error.toString() }
    };
  }
};
