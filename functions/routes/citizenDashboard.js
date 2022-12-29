const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const router = express.Router();
const data = require('../database/get_data');

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
    res.render('citizenDashboard', {title: 'dashboard', message: 'CitizenDashboard!'});

    // Returns records in JSON format
    var record;
    await data.get_certain_val('/Records').then((data) => {
        record = data;
    });
    
    console.log(record);
});

router.post('/', async(req, res, next) =>
{

    res.status(201).send();
}
)

module.exports = router;