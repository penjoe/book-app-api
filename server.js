'use strict'

// Installed dependencies and libraries
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const overRide = require('method-override')
const cors = require('cors');

// server port
const PORT = process.env.PORT || 3000;

// Create express instance
const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

// EJS setup
app.set('view engine', 'ejs');

// REST/CRUD http routes

// test route
app.get('/test', (req, res) => {
  res.render('pages/index')
});

// Start server and listen for requests
app.listen( PORT, () => {
  console.log('Server is running on PORT ' + PORT)
});