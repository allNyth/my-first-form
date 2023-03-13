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
        validate: {
            validator: function(v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} invalid email`
          }
        },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(v);
            },
            message: props => `${props.value} invalid password`
        }
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now())
    }
}) 
const User = mongoose.model('user', userSchema)
module.exports = User