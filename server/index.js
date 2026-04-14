// Your server/index.js code here

// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/job-auto-apply', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});