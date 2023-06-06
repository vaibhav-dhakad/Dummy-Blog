const express = require('express')
const jwt = require('jsonwebtoken');

const secretKey = "JWTauthToken";
const router = express.Router();
const Blog = require('../model/blogSchema')
const User = require('../model/userSchema');
// const { ObjectId } = require('mongodb');
const verify = (req, res, next) => {
    const token = req.headers.token || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NGJjNDI5YmIyMDg5OTUxNTkyOTA4In0sImlhdCI6MTY4NDMyMzM5NH0.rfPFwdudnveBmKqkFcAjviApFDjNsXNl_kFGBIZYtys";
    const data = jwt.verify(token, secretKey);
    req.user_id = data.user;
    // console.log(req.user_id.id, "verified user");
    next();
}
router.get('/getUserPosts', verify, async(req, res) => {

    let blog = await Blog.find({
        user_id: req.user_id.id
    })

    res.status(200).json(blog)
})
router.get('/getOnePost', verify, async(req, res) => {
    const id = req.headers.id
        // console.log(req.headers.id);
    let blog = await Blog.findOne({
        _id: id
    })

    res.status(200).json(blog)
})
router.put('/updatePost', verify, async(req, res) => {

    let result = await Blog.findOneAndUpdate({ _id: req.headers.id }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }

        }, { new: true })
        // console.log(result)

    res.status(200).json(result)
})
router.get('/getAllPosts', verify, async(req, res) => {


    let blog = await Blog.find({
        user_id: req.user_id.id
    });

    res.status(200).json(blog)
})
router.post('/addPost', verify, async(req, res) => {

    let blog = await Blog.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.user_id.id
    })

    console.log(blog)
    res.status(200).json(blog)
})
router.delete('/delete', verify, async(req, res) => {
    // console.log("deleted")
    let blog = await Blog.deleteOne({ _id: req.headers.id })

    res.status(200).json(blog)
})

router.get('/getAllUsers', verify, async(req, res) => {
    console.log(req.user_id.id, 'uc')
    const id = req.user_id.id
    const loadedBlog = await Blog.find({ user_id: { $ne: id } })



    res.status(200).json(loadedBlog)
})


module.exports = router