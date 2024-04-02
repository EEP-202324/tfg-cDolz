const router = require('express').Router();

const User = require('../../models/user.model');

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;