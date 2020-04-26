# Server-side templating with EJS

## Description / Overview  
This week, you and your partner(s) will implement a basic full-stack application for a book list which will include the ability to search the Google Books API, add books to a database, and then render those books from a PostgreSQL database. You will also add the ability to update the details of a book or remove it from the collection.

Today's portion of the application involves requesting books from the API. The client can submit a form to search for a book by title or author, and the search results will then be rendered as a list in the browser.

Your entire application will be deployed on Heroku [HERE](https://jp-jz-booklist.herokuapp.com/).

Project database info - see attached `book.sql` file.
------------------------------------------------------
### User Stories  

[Project Trello Board](https://trello.com/b/LRWfINI9/joe-book-app)  

#### Lab 011
* Feature 1
    - Load Time: As a user, I want my application to load quickly so that I have an enjoyable experience.  
        - Given: that a user opens the application in the browser  
        - When: the user navigates to the home page  
        - Then: the index should load without a flash of unstyled content (FOUC)  
* Feature 2  
    - Search API: As a user, I want to search the Google Books API so that I can view the results of my search.    
        - Given: that the user enters a search query  
        - When: the user submits the search form  
        - Then: the search query should be included in a request to the Google Books API  
* Feature 3  
    - Browse Results: As a user, I want to be able to browse the search results.  
        - Given: that the user enters a search query  
        - When: the user submits the search form  
        - Then: the first ten books should be displayed to the user  
* Feature 4  
    - Error Messages: As a user, I want to view any error messages that occur during the usage of my book list application so that I know if something has gone wrong.  
        - Given: that the application is not functioning properly  
        - When: an error occurs  
        - Then: the user should receive feedback that something has gone wrong  
* Feature 5  
    - Deliver CSS: As a user, I want a simple, clean looking UI so that my application is easy to navigate  
        - Given: that the user access the application on multiple platforms  
        - When: the user views the application  
        - Then: the interface should deliver CSS to the browser  
* Feature 6  
    - Home Page: As a user, I want the application to have a home page, so that I can see relevant information  
        - Soon, you will display a collection of books on the home page, For now, set up a welcome page, based on the app design.  

#### Lab 012  
* Feature 1  
    - Saved Books: As a user, I want all of my saved books to be displayed on the home page so that I can view all of the books from my collection in a single view.  
        - Given: that a user opens the application in the browser  
        - When: the user navigates to the home page  
        - Then: all of the books saved in the collection should be rendered on the page  
* Feature 2  
    - Single Book: As a user, I want to request information about a single book so that I can view its additional details and share it by URL.  
        - Given: that a user views the book collection  
        - When: the user clicks on a "Views details" button for an individual book  
        - Then: the application should take the user to a book detail page where the book's details -- including description, ISBN, and bookshelf---will be displayed.  

        - Given: that a user is viewing the details of a single book  
        - When: the user clicks on a menu button  
        - Then: the user will be returned to the main page where all of the books from the collection are rendered.  
* Feature 3  
    - Add New Books: As a user, I want the ability to add new books to my application so that I can save search results.  
        - Given: that a user would like to expand their collection and is viewing search results  
        - When: the user clicks on a button to add a book to the database  
        - Then: the user should submit the form to add a new book  
* Feature 4 / 5
    - Consistent Design: As a user, I want the application to be designed in a consistent way so that I do not experience any down time or slow load times.  
        - Given: that a user views the application  
        - When: the user interacts with the application  
        - Then: the application should load quickly and perform efficiently  

#### Lab 013  
* Feature 1  
    - Update Details: As a user, I want to update the details of a book so that it displays the way I want it to, according to my personalized preferences  
        - Given: that the user on a book detail page would like to update the information stored for the book  
        - When: the user clicks on the "Update Details" button  
        - Then: the form containing the details should be revealed  

        - Given: that the user updates book details in the edit form  
        - When: the user clicks on the "Update book" button  
        - Then: the user-provided details for that book should be saved in the database  
* Feature 2  
    - Remove Books: As a user, I want to remove books from my collection so that it accurately represents my favorite books.  
        - Given: that a user on the book detail page would like to remove a book from the collection  
        - When: the user clicks on the "Delete Book" button  
        - Then: the book should be removed from the collection  

#### Lab 014  
* Feature 1  
    - DB Normalization: As a developer, I want to normalize the database to support browsing of bookshelves  

### Dependencies
* Express  
* dotenv  
* superagent 
* postgreSQL 
* ejs  
* cors
* method-override


### Installing
* File can be cloned from the below github repository
    - [book-app-api](https://github.com/penjoe/book-app-api)  

### Executing program
* After cloning this file do the following:  
    - npm init -y  
    - install list of dependencies
    - utilize your server to run the program  
    - node.js  / nodemon

## Help
* n/a

## Authors
- Software Developer: Joe Pennock  
    - [Official Github](https://github.com/penjoe)  

## Collaborations
- Software Developer: Joseph Zabaleta
    - [Official Github](https://github.com/joseph-zabaleta)  

## Version History

* 1.0.0 20200423
    - Initial Repo created.
    - Initial tree/files added.
    - Installed dependencies. 
    - Created basic server.js
    - Feature 01 Complete: Initial server.js file setup serving public files.
* 1.1.0 20200423
    - Created branch for lab-11-homepage
    - Setup basic index.ejs with some minimal css to show proof of life.
    - Set PORT, started server listening for requests.
* 1.2.0 20200423
    - Created branch for lab-11-api-search.
    - Tested index.ejs with a /test GET route.
    - Created a new.ejs with a form for user to search with two options, author and title.
    - Created new route for new.ejs.
* 1.3.0 20200423
    - Created function to handle request to Google Books API
    - Created a constructor function to generate new book objects based on search results
    - Map results from API search and run them through the constructor. 
    - Rendered search results onto show.ejs via an ejs template.
* 1.4.0 20200423
    - Created new branch lab-11-handle-errors
    - render a new view that all errors are redirected to
* 1.5.0 20200425
    - Created new branch lab-11-responsive-css
    - Used a pre-built template for CSS
    - Added styling to provide improved front-end experience
    - Added multiple media breakpoints for various device screen sizes
    - Employed SMACSS for a modular, organized CSS structure
    - Created a partial for each book so that when displayed, books will always look the same
* 1.6.0 20200425
    - Render home page at the root as soon as user loads page
    - Created layout partials for header and footers and added them into each view
    - Header now has a nav with links to home and search form pages
* 2.0.0 20200425
    - Created branch lab-12-database-setup
    - Setup .sql file.
    - Connected to database and tested connection.
* 2.1.0 20200425
    - Created function that pulls all data from database and renders that data into an ejs template on the homepage
    - Reworked GET route for homepage to include above function as a callback
    - Added a total book count on the homepage indicating total # of books saved in database
* 2.2.0 20200425
    - Created branch lab-12-single-book
    - Added button to all books displayed on the home page
    - Button takes user to a new view with a single book displayed with all book details
    - Reworked books displayed on homepage to only show limited info so that user needs to click to view all details
    
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments / Resources  
[EJS for server-side templating](https://ejs.co/)  
[ExpressJS docs - app.set](https://expressjs.com/en/4x/api.html#app.set)  
[HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)  
[HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#Using_built-in_form_validation)  
[Google Books API Documentation](https://developers.google.com/books/docs/v1/getting_started)  
[Superagent](https://visionmedia.github.io/superagent/)   

- Suggestion for a favicon:  
    [https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png](https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png)  
    
## Time Hacks per Features

#### Lab 011

* Feature #0 Repo Setup: 
    - Estimate of time needed to complete: 30 mins  
    - Start time: 2100 04/23/2020
    - Finish time: 2130 04/23/2020       
    - Actual time needed to complete: 30 mins

* Feature #1 Load Time: 
    - Estimate of time needed to complete: 60 mins
    - Start time: 2200 04/23/2020
    - Finish time: 2230 04/23/2020   
    - Actual time needed to complete: 30 mins

* Feature #2 Search API Form: 
    - Estimate of time needed to complete: 60 mins
    - Start time: 2245 04/23/2020
    - Finish time: 2310 04/23/2020
    - Actual time needed to complete: 25 mins

* Feature #3 Browse Results:
    - Estimate of time needed to complete: 120 mins
    - Start time: 2330 04/23/2020
    - Finish time: 0155 04/24/2020
    - Actual time needed to complete: 145 mins

* Feature #4 Error Messages
    - Estimate of time needed to complete: 15 mins
    - Start time: 1530 04/25/2020
    - Finish time: 1545 04/25/2020 
    - Actual time needed to complete: 15 mins

* Feature #5 Deliver CSS: 
    - Estimate of time needed to complete: 30 mins
    - Start time: 1630 04/25/2020
    - Finish time: 1705 04/25/2020
    - Actual time needed to complete: 35 mins
    
* Feature #6 Home Page: 
    - Estimate of time needed to complete: 30 mins
    - Start time: 1800 04/25/2020
    - Finish time: 1830 04/25/2020
    - Actual time needed to complete: 30 mins

#### Lab 012
* Feature #1 Save Books: 
    - Estimate of time needed to complete: 120 mins
    - Start time: 2125 04/25/2020
    - Finish time: 2225 04/25/2020
    - Actual time needed to complete: 100 mins
* Feature #2 Single Book: 
    - Estimate of time needed to complete: 120 mins
    - Start time:  04/25/2020
    - Finish time: 
    - Actual time needed to complete: 
* Feature #3 Add New Book:
    - Estimate of time needed to complete:
    - Start time:
    - Finish time:
    - Actual time needed to complete:
* Feature #4/5 Consist Design: 
    - Estimate of time needed to complete:
    - Start time:
    - Finish time: 
    - Actual time needed to complete:

#### Lab 013  
* Feature #1 Update Details: 
    - Estimate of time needed to complete:  
    - Start time:  
    - Finish time:    
    - Actual time needed to complete:  
* Feature #2 Remove Books: 
    - Estimate of time needed to complete:  
    - Start time:  
    - Finish time:    
    - Actual time needed to complete:  

#### Lab 014
* Feature #1 DB Normalization: 
    - Estimate of time needed to complete:  
    - Start time:  
    - Finish time:    
    - Actual time needed to complete:  