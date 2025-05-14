// Install
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());


const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/api/send-inquiry', async (req, res) => {
  const { phone, question } = req.body;

  console.log(`Inquiry from ${phone}: ${question}`);

  try {
    await twilioClient.messages.create({
      body: 'Thanks for your inquiry! We will get back to you soon.',
      from: process.env.PHONE_NUMBER,
      to: phone
    });
    res.json({ message: 'Inquiry sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send SMS reply.' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
