const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('login', { title: 'Happy Citizens Login' });
});

module.exports = router;