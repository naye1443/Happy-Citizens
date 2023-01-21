const express = require('express');
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
    if(req.session.username == 'usernamesuper'){
        console.log(req.session.username);
        res.render('SuperDashboard', {title: 'dashboard', message: 'Super-Dashboard!'});
    }else{
        res.send('You can not access this page');
    }
});

router.post('/', async(req, res, next) =>
{
    const user = req.body;

    res.status(201).send();
}
)

module.exports = router;