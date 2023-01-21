const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>
{
    res.render('index', {title: 'Hey', message: 'Hello There!'});
});

router.post('/', async(req, res, next) =>
{
    const user = req.body;

    res.status(201).send();
}
)

module.exports = router;