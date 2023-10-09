const express = require('express');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/musicapp', {useNewUrlParser: true});

// Define mongoose models here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});