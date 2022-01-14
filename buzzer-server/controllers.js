const db = require('./firebase/db');

const controllers = {
  tables: {
    get: (req, res) => {
      // Get all tables for user's business
      db.collection('users') // Example of a firestore db query
        .get()
        .then((snapshot) => {
          console.log(snapshot.docs[0].data());
        })
    },
    post: (req, res) => {
      // Post new table(s) for user's business
    },
    put: (req, res) => {
      // Update tables for user's business
    },
    qr: {
      get: (req, res) => {
        // Get QR codes for user's business's tables
      }
    }
  },
  user: {
    get: (req, res) => {
      // Retrieve user's information
    },
    put: (req, res) => {
      // Update user's information
    },
    delete: (req, res) => {
      // Delete user's information
    },
    post: (req, res) => {
      // Add new user
    }
  }
}
controllers.tables.get()
module.exports = controllers;