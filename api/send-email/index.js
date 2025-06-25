module.exports = async function (context, req) {
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: 'Method Not Allowed',
    };
    return;
  }

  const { firstName, lastName, email, subject, message } = req.body;

  context.res = {
    status: 200,
    body: {
      message: 'Function is working!',
      data: { firstName, lastName, email, subject, message }
    },
  };
};
