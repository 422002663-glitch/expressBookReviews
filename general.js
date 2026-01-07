// general.js
// Module to retrieve books by author, title, or ISBN using Axios

const axios = require('axios');

const BASE_URL = 'http://localhost:3000/books'; // Replace with your API base URL

/**
 * Get all books
 */
async function getAllBooks() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error.message);
    throw error;
  }
}

/**
 * Get books by ISBN
 * @param {string} isbn
 */
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/ISBN/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message

