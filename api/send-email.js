const emailjs = require('emailjs-com'); // or use axios/fetch to call EmailJS REST API
module.exports = async function (context, req) {
  const { firstName, lastName, email, subject, message } = req.body;

  const serviceID = process.env.SERVICE_ID;
  const templateID = process.env.TEMPLATE_ID;
  const userID = process.env.USER_ID;

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: {
          firstName,
          lastName,
          email,
          subject,
          message
        },
      }),
    });
    console.log("API JS ---------------->");
    console.log(res);
    const result = await res.json();
    console.log(result);
    
    context.res = {
      status: 200,
      body: { message: 'Email sent', result },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: 'Email send failed', details: error.toString() },
    };
  }
};
