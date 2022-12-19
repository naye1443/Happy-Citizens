const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const router = express.Router();

router.get('/',(req, res, next) =>
{
    res.render('citizenDashboard', {title: 'dashboard', message: 'citizen-Dashboard!'});
});

router.post('/', async(req, res, next) =>
{
    const user = req.body;

    res.status(201).send();
}
)

module.exports = router;