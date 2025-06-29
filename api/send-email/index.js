const sendEmail = require('./send-email');

module.exports = async function (context, req) {
  context.res = await sendEmail(req);
};
