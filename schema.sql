DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT,
  isbn VARCHAR(255),
  bookshelf VARCHAR(255),
  image_url TEXT
);

INSERT INTO books VALUES ('1', 'Dune', 'Frank Herbert', 'A book about Paul Atredies', '1294845773', 'sci-fi', 'https://i.imgur.com/J5LVHEL.jpg');