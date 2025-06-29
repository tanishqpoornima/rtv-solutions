import express from 'express';
import cors from 'cors';
import sendEmail from './send-email.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://rtv-solutions-pvt.com', 'https://www.rtv-solutions-pvt.com'], // allow both
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.post('/api/send-email', sendEmail);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
