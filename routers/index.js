const express = require('express');
const router = express.Router()
const registerController = require('../controllers/registerController')
const authController = require('../controllers/authController')



router.get('/', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register')
})
router.post('/register', registerController.registerUser)
router.post('/login', authController.authUser)
module.exports = router