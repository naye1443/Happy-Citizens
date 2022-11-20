const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require('../database/get_data');
const { json } = require('body-parser');

// routes for current route login
//const createAccountRoute = require('./createaccount');

//app.use('/createaccount', createAccountRoute);


router.get('/',(req, res, next) =>
{
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

router.get('/createaccount', (req,res,next) =>{
    res.render('createaccount', {title: 'Create a Account', message: 'Creating an Account'})
})

router.post('/', async (req, res, next) =>
{

    console.log(data.init('/Users'));
    // console.log(data.get_certain_val('/SuperUsers'));



    //jsonusers = JSON.parse( data.get_certain_val('/Users'));
    //jsonSuperUsers = JSON.parse(data.get_certain_val('/SuperUsers'));


    console.log(req.body);  // prints body of request to console
    res.status(201).send(); // sends a 201 status code back
})

module.exports = router;