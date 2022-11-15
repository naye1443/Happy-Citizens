const admin = require('firebase-admin');  // get admin credentials
const {getDatabase} = require('firebase-admin/database'); // get database operations
const serviceAccount = require('../../Auth_key.json');  // key to use database

// initalizes app and database
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://happy-8293-default-rtdb.firebaseio.com/"
});

// prints database to console
function get_database(){
  db = getDatabase(); // get database
  dbRef = db.ref()    // get refrence to database

  dbRef.on('value', (snapshot) =>{  // get the value at the refrence, and createcallback that prints shapshot of data to console
      console.log(snapshot.val());
  }, (errorObject) => {   // error call back if nothing is returned
      console.log('The read failed:' + errorObject.name);
  });
}



module.exports = {getDatabase, get_database};