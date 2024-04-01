const router = require('express').Router();

router.use('/login', require('./api/login'));

module.exports = router;