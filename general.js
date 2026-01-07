// general.js
const axios = require('axios');

// Base URL for Open Library API
const BASE_URL = 'https://openlibrary.org';

// Function to get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/search.json?author=${encodeURIComponent(author)}`);
    return response.data.docs; // Array of books
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
    return [];
  }
}

// Function to get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/search.json?title=${encodeURIComponent(title)}`);
    return response.data.docs; // Array of books
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
    return [];
  }
}

// Function to get books by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
    return response.data[`ISBN:${isbn}`] ? [response.data[`ISBN:${isbn}`]] : []; // Return array with single book
  } catch (error) {
    console.error('Error fetching books by ISBN:', error.message);
    return [];
  }
}

// Example usage
(async () => {
  const authorBooks = await getBooksByAuthor('Roald Dahl');
  console.log('Books by author:', authorBooks.map(book => book.title));

  const titleBooks = await getBooksByTitle('Matilda');
  console.log('Books by title:', titleBooks.map(book => book.title));

  const isbnBooks = await getBooksByISBN('9780140328721');
  console.log('Books by ISBN:', isbnBooks.map(book => book.title || book.title));
})();
