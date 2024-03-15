
const express = require('express');
const cors = require('cors');
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');
const mongoose = require('./db/db');
const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

// Require your routes and use them here
const userRoute = require('./route/userRoute');
app.use('/api', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
