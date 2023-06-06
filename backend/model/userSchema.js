const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    using_since: {
        type: Date,
        default: Date.now
    }
});
userSchema.pre('save', (next) => {
    let now = new Date().getHours().toString();
    this.using_since = now;
    if (this.using_since === null) {
        this.using_since = now;
    }
    next();
})
module.exports = mongoose.model('User', userSchema);