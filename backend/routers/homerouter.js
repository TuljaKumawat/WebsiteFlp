
const router = require('express').Router();
const projectTable = require('../models/project');
const clientTable = require('../models/client');

// Projects 
router.get('/projects-json', async (req, res) => {
  const projects = await projectTable.find({ status: 'published' });
  res.json(projects);
});

// Clients 
router.get('/clients-json', async (req, res) => {
  const clients = await clientTable.find({ status: 'published' });
  res.json({ data: clients });
});

module.exports = router;
