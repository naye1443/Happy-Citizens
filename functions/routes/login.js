const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.get('/',(req, res, next) =>
{
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

router.post('/', (req, res, next) =>
{
    console.log(req.body);  // prints body of request to console
    res.status(201).send(); // sends a 201 status code back
})
module.exports = router;