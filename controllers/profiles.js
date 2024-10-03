const express = require('express');
const router = express.Router();

const UserModel = require('../models/user');

router.get('/:userId', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        if (!user) {
            res.status(404);
            throw new Error('User not found.');
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'User not found.' });
    }
});

module.exports = router;