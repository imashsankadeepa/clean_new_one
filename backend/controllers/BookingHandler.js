const Booking = require('../models/BookingModel');
const nodemailer = require('nodemailer');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.oakrootscleaning.uk', // replace if needed
      port: 465,
      secure: true,
      auth: {
        user: 'info@oakrootscleaning.uk',
        pass: process.env.EMAIL_PASS, // replace securely in .env for production
      },
    });


transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Error:', error);
  } else {
    console.log('SMTP connection success:', success);
  }
});


    const mailOptions = {
      from: 'info@oakrootscleaning.uk',
      to: 'info@oakrootscleaning.uk',
      subject: 'New Booking Received',
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Service:</strong> ${booking.service}</p>
        <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</p>
        <p><strong>Message:</strong> ${booking.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking saved and email sent.' });

  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ message: 'Booking failed or email error.' });
  }
};
