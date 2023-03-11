const express = require('express');
const router = express.Router()
const registerController = require('../controllers/registerController')

router.get('/',(req,res) => res.send('rota home'))
router.post('/register', registerController.registerUser)
module.exports = router