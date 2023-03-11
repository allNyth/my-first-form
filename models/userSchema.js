const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now())
    }
}) 
const User = mongoose.model('User', userSchema)
module.exports = User