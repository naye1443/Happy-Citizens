const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require('../database/get_data');
const { json } = require('body-parser');

router.get('/',(req, res, next) =>
{
    // check if session has a username associated with session, if not, loggedin is set to false
    if(req.session.username == null)
        req.session.loggedin = false;
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

router.get('/createaccount', (req,res,next) =>{
    res.render('createaccount', {title: 'Create a Account', message: 'Creating an Account'})
})

router.post('/', async (req, res, next) =>{
    // ************************* NEED THIS TO CALL GET_CERTAIN_VAL, GET_CERTAIN_VAL RETURNS A PROMISE, NEED TO EXTRACT DATA FROM PROMISE **************
    var varobj;
    var usertype = "";
    await data.get_certain_val('/Users').then((data) => {
        varobj = data;
        usertype = "users";
    });

    // await data.get_certain_val('/SuperUsers').then((data) => {
    //     varobj = data;
    //     usertype = "superusers";
    // })
    console.log(varobj);
    // ***************************************************************************************************************************************************/
    //console.log(req.body);  // prints body of request to console , Hence, username and password

    // need to loop through User and SuperUsers until find Matching Username and password
    const Username = req.body.username;
    const Pass = req.body.password;

    // Need to return array of all possible JSONobj in array
    if(usertype === "users"){
        Users = [];
        AuthenticatedUser = false;
        for(i=0; i<Object.keys(varobj).length;i++){
            if((data.findJson(varobj, String(i))[0].username === Username) && (data.findJson(varobj, String(i))[0].password === Pass)){

                console.log(data.findJson(varobj, String(i))[0].username + " should be equal to " + Username);
                console.log(data.findJson(varobj, String(i))[0].password + " should be equal to " + Pass);
                AuthenticatedUser = true;
                console.log("Authenticated user");
                break;
            }else{
                console.log("username and password does not exist");
                return res.redirect("./");
            }
            Users.push(data.findJson(varobj, String(i)[0]));
        }
    }else{
        SuperUsers = [];
        AuthenticatedUser = false;
        for(i=0; i<Object.keys(varobj).length;i++){
            if((data.findJson(varobj, String(i))[0].username === Username) && (data.findJson(varobj, String(i))[0].password === Pass)){
                AuthenticatedUser = true;
                console.log("Authenticated Superuser");
            }else{
                console.log("username and password does not exist");
                return res.redirect("./");  // returns user to loginpage. Return is need because cannot return 2 responses.
            }
            SuperUsers.push(data.findJson(varobj, String(i)[0]));
        }
    }
    
    if(AuthenticatedUser && usertype == "users"){
        req.session.username = Username;    // Store username in session
        req.session.loggedin = true;
        res.redirect('./citizenDashboard');    // redirects user and sends username whrough getreq
    }else{
        req.session.username = Username;
        req.session.loggedin = true;
        res.redirect('./SuperDashboard');
    }

    res.status(201).send(); // sends a 201 status code back
})

module.exports = router;