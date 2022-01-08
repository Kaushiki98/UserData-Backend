const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    phone: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);