const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();
var data = require('../database/get_data');

data.get_database();    // prints entire database from root

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