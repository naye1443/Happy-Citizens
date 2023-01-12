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

router.get('/', Secure_login, (req, res, next) => {
    // need to determine which card is clicked, and send ID of card clicked
    // To send data to front end

    console.log("We are in req body " + req.body);
    //const aforeEdited = req.body;

    res.render('editRecord', {title: 'editRecord', message:'editRecord', post:record, user:req.session.username})

})

router.post('/', Secure_login, (req, res, next) => {

    console.log(req.body);
    //const aforeEdited = req.body;

    res.json({
        CitizenRecord: req.body
    });

    //res.render('editRecord', {title: 'editRecord', message:'editRecord', user:req.session.username})

})

module.exports = router;