const projectTable = require('../models/project');

// GET all projects (JSON for React)
exports.allproject = async (req, res) => {
  try {
    const projectData = await projectTable.find();
    res.json(projectData); // send JSON instead of EJS
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST new project
exports.newproject = async (req, res) => {
  try {
    const { name, desc } = req.body;
    if (!name || !desc || !req.file) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const imgfilename = req.file.filename;
    const newproject = new projectTable({ name, desc, img: imgfilename });
    await newproject.save();
    res.status(201).json({ message: "Project added successfully", project: newproject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// TOGGLE publish/unpublish
exports.projectstatus = async (req, res) => {
  try {
    const { id, status } = req.params;
    const newStatus = status === "unpublished" ? "published" : "unpublished";
    await projectTable.findByIdAndUpdate(id, { status: newStatus });
    res.json({ message: "Status updated successfully", status: newStatus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

