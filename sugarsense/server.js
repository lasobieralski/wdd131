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
// Route for handling form submission
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact Form: ${subject}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending message.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Message sent successfully.');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
