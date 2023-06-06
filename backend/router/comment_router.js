const express = require('express');

const jwt = require('jsonwebtoken');
const secretKey = "JWTauthToken";
const Comment = require('../model/commentSchema')

const router = express.Router();

const verify = (req, res, next) => {
    const token = req.headers.token
    const data = jwt.verify(token, secretKey);
    req.user_id = data.user;

    next();
}

router.post('/addComment', verify, async(req, res) => {
    console.log(req.user_id.id, 'onadding')
    const comment = await Comment.create({
        Blog_id: req.body.blog_id,
        user_id: req.user_id.id,
        comment: req.body.comment
    })

    res.status(200).send(comment)
})
router.get('/getUserComment', verify, async(req, res) => {
    try {
        const comment = await Comment.find({
            $and: [
                { user_id: { $eq: req.user_id.id } },
                { Blog_id: { $eq: req.headers.id } }
            ]
        }).populate('user_id')

        res.status(200).json(comment)

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error })
    }
})
router.get('/getAllComments', verify, async(req, res) => {
    try {
console.log(process,'ln 45')
        const comment = await Comment.find({
            $and: [
                { user_id: { $ne: req.user_id.id } },
                { Blog_id: { $eq: req.headers.id } }
            ]
        }).populate('user_id')

        res.status(200).json(comment)

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error })
    }
})

module.exports = router