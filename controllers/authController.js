const User = require('../models/userSchema')
const bcrypt  = require('bcrypt')
exports.authUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        res.status(500).json({error: 'credential error'})
    } else {
        pwdMatched = await bcrypt.compare(password, user.password)
        if (pwdMatched) {
            console.log('voce esta autenticado')
            return res.status(201).json('Voce esta autenticado')
        } else {
            console.log('a senha esta errada')
            return res.status(500).json('email ou senha incorretos')
        }
    }
}