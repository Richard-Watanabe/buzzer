const db = require('./firebase/db');

const usersRef = db.collection('users');
const businessRef = db.collection('businesses');

const controllers = {
  tables: {
    get: (req, res) => {
      // Get all tables for user's business
      if (!req.params.id) {
        res.status(404).send('No ID Found');
      }
      // req.params.id will be business' (user) id
      businessRef.doc(req.params.id) // Points to specific document in business collection
        .get() // Gets a snapshot of the data from that document
        .then((result) => { // Does something with that data
          if (!result.exists) {
            res.status(404).send('No users found');
          }

          result.ref.collection('tables') // Points to the subcollection "tables" of that document
            .get() // Gets a snapshot of the data from that document
            .then((snapshot) => { // Does something with that data
                let returnArr = [];
                snapshot.docs.forEach((doc) => { // Iterate over the documents
                  returnArr.push(doc.data()); // Push table data into arr
                });
                res.status(200).send(returnArr);
              }
            )
        })

    },
    post: (req, res) => {
      // Post new tables for user's business (Should be used on signup)
      // All users should need to provide is the numbers for the tables in req.body
      // Ex. ['1', '2', '3'] or ['1a', '2a', '3a']
      if (!req.params.id) {
        res.status(404).send('No ID Found');
      }

      businessRef.doc(req.params.id)
        .get()
        .then((result) => {
          if (!result.exists) {
            res.status(404).send('No users found');
          }
          const tablesRef = result.ref.collection('tables');

          req.body.tables.forEach((tableNum) => {
            tablesRef.add({
              needsAttention: false,
              occupied: false,
              number: tableNum
            }) // Probably better way to do this
          })
            res.status(200).send('Tables added');
        })
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

module.exports = controllers;