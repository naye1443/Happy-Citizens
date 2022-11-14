const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('../../Auth_key.json');  // key to use database
const router = express.Router();

// initalizes database
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://happy-8293-default-rtdb.firebaseio.com/"
});

router.get('/',(req, res, next) =>
{
    res.render('index', {title: 'Hey', message: 'Hello There!'});
});

router.post('/', async(req, res, next) =>
{
    const user = req.body;

    await admin.firestore().collection('users').add(user);

    res.status(201).send();
}
)

module.exports = router;