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
  dbRef = db.ref();    // get refrence to database

  dbRef.on('value', (snapshot) =>{  // get the value at the refrence, and createcallback that prints shapshot of data to console
      console.log(snapshot.val());
  }, (errorObject) => {   // error call back if nothing is returned
      console.log('The read failed:' + errorObject.name);
  });
}

// finding a value in that data base cannot return value as a json Object
async function get_certain_val(value){
  db = getDatabase();
  dbRef = db.ref(value);

  // returns a promise that is resolved when the refrence to the database toJSON
  return new Promise((resolve, reject) => {
    dbRef.once('value', function(snapshot){
      resolve(snapshot.toJSON());
    });
  });

};



// @locationinDB, "Users" or "SuperUsers" Ex. 'Users/000' points to {PhoneNumber: '(561)719-3192', StreetAddress: '1782 testcourtsuper', password: 'passwordsuper', username: 'usernamesuper'// }
// @value, json data to add {key: "value"}
function change_record_attr(locationinDb, value){
  db = getDatabase();
  dbRef = db.ref(locationinDb);
  dbRef.update(value)
}

// deletes record at certain place
function delete_record(locationinDb){
  db = getDatabase();
  dbRef = db.ref(locationinDb);
  dbRef.set(null)
}

// returns snapshot of an array containing keys of object
function snapshotToArray(snapshot){
  var returnArr = [];

  snapshot.forEach(function(childSnapshot){
    var item = childSnapshot.val();
    item.key = chileSnapshot.key;

    returnArr.push(item);
  });
  returnArr;
}

module.exports = {getDatabase, get_database, change_record_attr, delete_record, get_certain_val};