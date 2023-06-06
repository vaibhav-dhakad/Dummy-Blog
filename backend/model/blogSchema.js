const mongoose = require('mongoose');
const User = require('./userSchema')
const blogSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },

    created_At: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Blog', blogSchema);