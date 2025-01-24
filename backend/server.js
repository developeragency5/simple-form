const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const moment = require('moment');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Serve React static files

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema
const FormDataSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    source: String,
    computerBrand: String,
    computerModel: String,
    printerBrand: String,
    printerModel: String,
    diagnose: String,
    converted: String,
    notInterested: String,
    prospect: String,
    agentName: { type: String, required: true },
    timestamp: String,
  },
  { timestamps: true }
);

const FormData = mongoose.model('FormData', FormDataSchema);

// Get the passcode from the environment variable
const correctPasscode = process.env.PASSCODE;

if (!correctPasscode) {
  console.error('Error: PASSCODE environment variable is not set!');
  process.exit(1); // Exit the server
}

// Format date with moment
const formatDate = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss A');

// POST API: Save form data with passcode validation
app.post('/api/data', async (req, res) => {
  const { passcode, ...formData } = req.body;

  // Check passcode
  if (passcode !== correctPasscode) {
    return res.status(403).json({ message: 'Incorrect passcode!' });
  }

  // Add timestamp
  formData.timestamp = formatDate(new Date());

  try {
    const newFormData = new FormData(formData);
    await newFormData.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET API: Retrieve all form data
app.get('/api/data', async (req, res) => {
  try {
    const data = await FormData.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.error('Error fetching form data:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Serve React frontend for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
