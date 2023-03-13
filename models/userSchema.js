const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-ZÀ-ÿ]{2,}$/.test(v)
            },
            message: props => `${props.value} invalid firstname`

        }
    },
    lastname: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-ZÀ-ÿ]+([ '-][a-zA-ZÀ-ÿ]+)*$/.test(v)
            },
            message: props => `${props.value} invalid lastname`
        }
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} invalid email`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(v);
            },
            message: props => `${props.value} invalid password`
        }
    },
    number: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[1-9]\d{1}[9]\d{8}$/.test(v)
            },
            message: props => `${props.value} invalid number`
        }
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()),
        index: false
    }
},
    { autoIndex: false },
    {
        toJSON: { virtuals: true, order: ['firstname', 'lastname', 'email', 'password', 'createdAt'] },
        toObject: { virtuals: true, order: ['firstname', 'lastname', 'email', 'password', 'createdAt'] }
    }
)
const User = mongoose.model('user', userSchema)
module.exports = User