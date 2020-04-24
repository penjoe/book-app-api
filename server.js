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

// Constructor function to generate new book Object based on API search results
function Book(element) {
  this.title = element.volumeInfo.title ? element.volumeInfo.title : 'No Title Available';
  this.author = element.volumeInfo.authors ? element.volumeInfo.authors[0] : 'No Author Available';
  this. description = element.volumeInfo.description ? element.volumeInfo.description : 'No Description Available';
  this.isbn = element.volumeInfo.industryIdentifiers ? element.volumeInfo.industryIdentifiers[0] : 'No ISBN Available';
  this.bookshelf = element.bookshelf;
  this.image_url = element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : `https://i.imgur.com/J5LVHEL.jpg`;
}

// Functions to handle various routes to/from server

// Function to handle Google Books API search and results
function handleBooks(req, res) {
  const { filter, bookQuery} = req.body;
  const url = `https://www.googleapis.com/books/v1/volumes?q=+${filter}:${bookQuery}`;

  superagent.get(url)
    .then( bookResponse => {
      let books = bookResponse.body.items;
      return books.map( element => new Book(element));
    })
    .then( bookResults => {
      res.render('./searches/show', {bookResults})
    })
    .catch( error => {})
  
}

// REST/CRUD http routes
app.use(cors());
app.post('/searches', handleBooks);
app.get('/searches/new', (req, res) => {
  res.render('searches/new')
});

// test routes
app.get('/test', (req, res) => {
  res.render('pages/index')
});
app.get('/searches/show', (req, res) => {
  res.render('searches/show')
});

// Start server and listen for requests
app.listen( PORT, () => {
  console.log('Server is running on PORT ' + PORT)
});