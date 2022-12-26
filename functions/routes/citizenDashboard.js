const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const router = express.Router();

const Secure_login = (req, res, next) =>{
    if(req.session.loggedin == false){
        console.log("User not logged in. Redirecting to home page");
        return res.redirect('./');
    }
    else
        next();
}

router.get('/', Secure_login, (req, res, next) =>
{
    // if(req.session.username == 'username'){
    //     console.log(req.session.username);
    res.render('citizenDashboard', {title: 'dashboard', message: 'CitizenDashboard!'});
    // }else{
    //     res.send('You can not access this page');
    // }
});

router.post('/', async(req, res, next) =>
{
    const user = req.body;

    res.status(201).send();
}
)

module.exports = router;