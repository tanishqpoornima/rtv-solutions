import express from 'express';
import cors from 'cors';
import sendEmail from './send-email.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Custom CORS config
const allowedOrigins = ['https://rtv-solutions-pvt.com', 'https://www.rtv-solutions-pvt.com'];
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // ✅ Preflight response
  }
  next();
});

app.use(express.json());
app.post('/api/send-email', sendEmail);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
