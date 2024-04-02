const router = require('express').Router();

router.use('/login', require('./api/login'));
router.use('/sign-up', require('./api/sign-up'));

module.exports = router;