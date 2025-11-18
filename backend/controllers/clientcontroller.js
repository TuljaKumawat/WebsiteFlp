const clientTable = require('../models/client');

// Get all clients (JSON for React)
exports.allclient = async (req, res) => {
  try {
    const data = await clientTable.find().sort({ createDate: -1 });
    const tstatus = await clientTable.countDocuments();
    const tpublished = await clientTable.countDocuments({ status: 'published' });
    const tunpublished = await clientTable.countDocuments({ status: 'unpublished' });
    res.json({ data, tstatus, tpublished, tunpublished });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add new client
exports.addclient = async (req, res) => {
  try {
    const { name, desc, designation } = req.body;
    if (!name || !desc || !designation || !req.file)
      throw new Error("All fields are required!");
    
    const img = req.file.filename;
    const newClient = new clientTable({ name, desc, designation, img });
    await newClient.save();

    // ✅ Return JSON instead of EJS
    res.status(200).json({ message: "Client added successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Toggle publish/unpublish
// Update client status
exports.clientstatus = async (req, res) => {
  try {
    const { id, status } = req.params;

    // Ensure only 'published' or 'unpublished' values
    if (!['published','unpublished'].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const newStatus = status === 'published' ? 'unpublished' : 'published';

    const updatedClient = await clientTable.findByIdAndUpdate(
      id,
      { status: newStatus },
      { new: true } // Return the updated document
    );

    if (!updatedClient) return res.status(404).json({ message: "Client not found" });

    res.json({ message: "Status updated", client: updatedClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



