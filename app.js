// Eric Thompson
// 100526728
// Finished on April 19th 2024

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require('./config/passport')(passport);

// Routes
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


