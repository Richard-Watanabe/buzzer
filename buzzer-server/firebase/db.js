const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'buzzer-50690',
  keyFilename: '/Users/jonathanlim/Downloads/buzzer-50690-firebase-adminsdk-13md6-ab5c7666ae.json',
});

module.exports = db;