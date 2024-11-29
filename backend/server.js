  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const PORT=5000;

  require('dotenv').config();

  const app = express();
  app.use(cors());
  app.use(express.json());

  // Connect to MongoDB
  mongoose.connect("mongodb://localhost:27017/notesapp")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  // Define routes
  app.use('/api/notes', require('./routes/notes'));
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
