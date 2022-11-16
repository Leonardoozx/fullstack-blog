require('dotenv').config();

const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/login.routes');
const commentsRoutes = require('./routes/comments.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(cors());
app.use(cors());
app.use(cors());
app.use(cors());

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/comments', commentsRoutes);
app.use('/user', userRoutes);

module.exports = app;
