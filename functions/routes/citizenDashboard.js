const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const router = express.Router();
const data = require('../database/get_data');
const { user } = require('firebase-functions/v1/auth');
const session = require('express-session');

// middleware checks authentication
const Secure_login = (req, res, next) =>{
    if(req.session.loggedin == false){
        console.log("User not logged in. Redirecting to home page");
        return res.redirect('./');
    }
    else
        next();
}

router.get('/', Secure_login, async (req, res, next) =>
{

    var record;
    await data.get_certain_val('/Records').then((data) => {
        record = data;
    });
    console.log('Username:' + req.session.username);

    req.session.save();
    
    res.render('citizenDashboard', {title: 'dashboard', message: 'CitizenDashboard!', post:record, user:req.session.username}, );  

});

router.post('/', async(req, res, next) =>
{
    console.log(req.body);  // Test for parsing client request

    // Querys records and returns in jsonformat
    var record;
    await data.get_certain_val('/Records').then((data) => {
        record = data;
    });

    // reponse of Post request
    res.json({
        status: record
    });
})

module.exports = router;