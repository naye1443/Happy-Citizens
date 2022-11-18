const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>
{
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

// router.post('/', (req,res,next) =>
// {
//     //req.body().
// })

module.exports = router;