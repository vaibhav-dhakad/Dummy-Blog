const express = require('express');
// const passport = require('passport');
const jwt = require('jsonwebtoken');
const secretKey = "JWTauthToken";
const User = require('../model/userSchema')
    // require('../config/passport')(passport)
const router = express.Router();
router.post('/signup', async(req, res) => {
    let user = await User({
        user_name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    user.save();
    const data = { user: { id: user._id } };
    const token = jwt.sign(data, secretKey);
    res.status(200).json({ user, token });
})
router.post('/login', async(req, res) => {
    let user = await User.find({
        email: req.body.email,
        password: req.body.password,
    });

    const data = { user: { id: user._id } };
    const token = jwt.sign(data, secretKey);

    res.status(200).send('logged in successfully');
})


module.exports = router