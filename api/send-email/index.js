const sendEmail = require('./send-email');

module.exports = async function (context, req) {
  // ✅ Handle preflight (CORS OPTIONS) request
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // 🔒 Replace with your domain in production
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
    return;
  }

  // ✅ Handle POST (send email)
  const emailResponse = await sendEmail(req);

  context.res = {
    ...emailResponse,
    headers: {
      'Access-Control-Allow-Origin': '*', // 🔒 Replace with 'https://rtv-solutions-pvt.com' if needed
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  };
};
