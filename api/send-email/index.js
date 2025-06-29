const sendEmail = require('./send-email');

module.exports = async function (context, req) {
  // ✅ Handle preflight (CORS OPTIONS) request
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': ['https://rtv-solutions-pvt.com', 'https://www.rtv-solutions-pvt.com', 'https://green-sea-0fb8abb10.2.azurestaticapps.net', 'https://www.green-sea-0fb8abb10.2.azurestaticapps.net'], // 🔒 Replace with your domain in production
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
      'Access-Control-Allow-Origin': ['https://rtv-solutions-pvt.com', 'https://www.rtv-solutions-pvt.com', 'https://green-sea-0fb8abb10.2.azurestaticapps.net', 'https://www.green-sea-0fb8abb10.2.azurestaticapps.net'], // 🔒 Replace with 'https://rtv-solutions-pvt.com' if needed
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  };
};
