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
    const jsvar = JSON.parse(JSON.stringify(varobj));
    console.log(jsvar);
    // ***************************************************************************************************************************************************/


    console.log(req.body);  // prints body of request to console
    res.status(201).send(); // sends a 201 status code back
})

module.exports = router;