const mongoose = require('mongoose');

const db = () => {
    mongoose.connect('mongodb://localhost:27017/Blog');
    console.log('Connected to db Successfully');
}
module.exports = db;