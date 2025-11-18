const contactFormTable = require('../models/contactForm');

// Submit new contact form
exports.newcontactForm = async (req, res) => {
  try {
    const { name, email, mobile, city } = req.body;
    if (!name || !email || !mobile || !city)
      throw new Error("All fields are required!");
    
    const newQuery = new contactFormTable({ name, email, mobile, city });
    await newQuery.save();

    res.status(200).json({ message: "Your quote has been submitted successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all contact forms (JSON for React)
exports.allcontactform = async (req, res) => {
  try {
    const data = await contactFormTable.find().sort({ postedDate: -1 });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
