const express = require('express');
const router = express.Router()

router.get('/',(req,res) => res.json('rota home'))
module.exports = router