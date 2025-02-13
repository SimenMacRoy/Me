const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to send an email
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or any other email service (e.g., Outlook, Yahoo)
    auth: {
      user: 'macroysimen@gmail.com',
      pass: 'dycz crhl qzyj lvkf', // Use environment variables for security
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'macroysimen@gmail.com', // Your receiving email
      subject: 'New Contact Form Message',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    res.status(200).json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
