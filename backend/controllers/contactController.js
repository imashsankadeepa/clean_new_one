const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { name, email, message, company, phone, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all required fields: name, email, message' });
  }

  try {
    const newMessage = new Message({ name, email, message, company, phone, subject });
    await newMessage.save();

    return res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};
