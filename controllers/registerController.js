const User = require('../models/userSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.registerUser = async (req, res) => {
    const { email, password, firstname, lastname, phone, cep } = req.body
    async function createUser(email, password, firstname, lastname, phone, cep) {
        const newUser = new User({
            email,
            password,
            firstname,
            lastname,
            phone,
            cep
        });
        try {
            const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
            if (!regexPass) {
               return res.json({password: false})
            }
            const hashedPass = await bcrypt.hash(password, saltRounds);
            newUser.password = hashedPass
            const savedUser = await newUser.save()
            console.log(savedUser)
            return res.json(`Usuario ${savedUser.email} criado com sucesso`)
            
        } catch (error) {
            console.error(error)
            res.send(error.message)
        }
    }
    createUser(email, password, firstname, lastname, phone, cep)
}