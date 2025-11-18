const newsLetterTable = require('../models/newsLetter');

// Subscribe new email
exports.newslettersubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) throw new Error("Email is required!");

    const newSubscriber = new newsLetterTable({ email });
    await newSubscriber.save();

    res.status(200).json({ message: "You are subscribed to the newsletter!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all subscribers (Admin)
exports.allnewslettersubscribers = async (req, res) => {
  try {
    const data = await newsLetterTable.find().sort({ subscribedDate: -1 });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
