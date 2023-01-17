const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const router = express.Router();
const data = require('../database/get_data');
const { user } = require('firebase-functions/v1/auth');
const session = require('express-session');
const { app } = require('firebase-admin');
const {rootDir} = require('./login');

// middleware checks authentication
const Secure_login = (req, res, next) =>{
    if(req.session.loggedin == false){
        console.log("User not logged in. Redirecting to home page");
        return res.redirect("/happy-8293/us-central1/app");
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
    req.session.save(); // save session after data is loaded
    res.render('citizenDashboard', {title: 'dashboard', message: 'CitizenDashboard!', post:record, user:req.session.username}, );  
});

router.get('/editRecord', Secure_login, (req, res, next) => {
    // need to determine which card is clicked, and send ID of card clicked
    // To send data to front end
    console.log(req.query.key)
    console.log(req.query.val)

    res.render('editRecord', {title: 'editRecord', message:'editRecord', user:req.session.username})

});

router.post('/editRecord', Secure_login, (req,res,next) => {

    console.log(req.body.InsuranceName);
    console.log(req.body.InsuranceType);
    console.log(req.body.Deductible);
    console.log(req.body.LandValue);
    console.log(req.body.PropertyName);

})

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