const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors);

app.get('/', (_req, res) => res.status(200).json({ message: 'oapsoda' }));

app.use(express.json());

module.exports = app;
