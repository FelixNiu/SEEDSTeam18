const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: true }));

// use Routes
app.use('/api/articles', articles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));