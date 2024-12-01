require('dotenv').config(); // Load environment variables
const express = require('express'); // Import Express.js
const bodyParser = require('body-parser'); // Parse incoming request bodies
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const PORT = 5000; // You can change this if needed

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('sugarsense')); // Serve static files like HTML, CSS, JS

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Change if you're using a different email provider
    auth: {
        user: process.env.EMAIL, // Your email from .env
        pass: process.env.PASSWORD // Your email password or app-specific password
    }
});

// Route to handle form submission
app.post('/send', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email (user input)
        to: process.env.EMAIL, // Your email address
        subject: `New message from ${name}: ${subject}`,
        text: `You received a new message from ${name} (${email}):\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
