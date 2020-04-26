'use strict'

// Just for fun
const chalk = require('chalk');
const log = console.log;

// Installed dependencies and libraries
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const overRide = require('method-override')
const cors = require('cors');

// server port
const PORT = process.env.PORT || 3000;

// Create new database instance
const dbClient = new pg.Client(process.env.DATABASE_URL)

// Create connection to database
dbClient.connect( error => {
  if ( error ) {
    console.error('Connect To Database: Failed')
  } else {
    console.log('Connect To Database: Success')
  }
})

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
  this.isbn = element.volumeInfo.industryIdentifiers ? element.volumeInfo.industryIdentifiers[0].identifier : 'No ISBN Available';
  this.bookshelf = element.bookshelf ? element.bookshelf : 'No bookshelf selected';
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
    .catch( error => errorHandler('Error calling from API to get a list of 10 books', req, res));
}

// Function that pulls book info from the database and renders it on the homepage
function renderDatabase(req, res) {
  let fromSQL = `SELECT * FROM books;`;
  
  dbClient.query(fromSQL)
    .then( sqlResults => {
      if (sqlResults.rowCount === 0) {
        res.render('./searches/new')
      } else {
        res.render('./pages/index', {sqlResults})
      }
    })
    .catch( error => errorHandler('Error rendering from database to index.ejs', req, res));
}

// Function to handle all errors
function errorHandler(error, req, res) {
  res.render('./pages/error', {error});
}

// REST/CRUD http routes
app.use(cors());
app.get('/', renderDatabase)
app.post('/searches', handleBooks);
app.get('/searches/new', (req, res) => {
  res.render('searches/new')
});

// test route
app.get('/test', (req, res) => {
  res.render('pages/error')
});


// Start server and listen for requests... with a custom timestamp!
app.listen( PORT, () => {
  const today = new Date();
  let dd = today.getDate();
  if(dd < 10) dd = "0" + dd;
  let mm = today.getMonth() + 1;
  if(mm < 10) mm = "0" + mm;
  const yyyy = today.getFullYear();
  let hh = today.getHours();
  if(hh < 10) hh = "0" + hh;
  let ii = today.getMinutes();
  if(ii < 10) ii = "0" + ii;
  let ss = today.getSeconds();
  if(ss < 10) ss = "0" + ss;
  console.log(chalk.green("[nodemon]", `${yyyy}-${mm}-${dd} ${hh}:${ii}:${ss}`));
  console.log('Server is running on PORT ' + PORT)
})