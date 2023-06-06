const mongoose = require('mongoose');
const Blog = require('./blogSchema')
const commentSchema = new mongoose.Schema({
    Blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    comment: {
        type: String,

    }
});

module.exports = mongoose.model('Comment', commentSchema);