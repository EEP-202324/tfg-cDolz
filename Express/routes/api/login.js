const router = require('express').Router();

const User = require('../../models/user.model');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;