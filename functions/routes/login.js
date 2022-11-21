const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require('../database/get_data');
const { json } = require('body-parser');

router.get('/',(req, res, next) =>
{
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

router.get('/createaccount', (req,res,next) =>{
    res.render('createaccount', {title: 'Create a Account', message: 'Creating an Account'})
})

router.post('/', async (req, res, next) =>
{
    // ************************* NEED THIS TO CALL GET_CERTAIN_VAL, GET_CERTAIN_VAL RETURNS A PROMISE, NEED TO EXTRACT DATA FROM PROMISE **************
    var varobj;
    await data.get_certain_val('/Users').then((data) => {
        varobj = data;
    });
     //console.log(varobj);
     //console.log(typeof varobj);
    // ***************************************************************************************************************************************************/
    //console.log(req.body);  // prints body of request to console , Hence, username and password

    // need to loop through User and SuperUsers until find Matching Username and password
    //for(varobj)
    const Username = req.body.username;
    const Pass = req.body.password;

    console.log(data.findNode(Username,Pass, varobj));

    res.status(201).send(); // sends a 201 status code back
})

module.exports = router;