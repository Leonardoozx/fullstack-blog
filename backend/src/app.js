require('dotenv').config();

const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/login.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRoutes);

module.exports = app;
