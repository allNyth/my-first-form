const User = require('../models/userSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.registerUser = async (req, res) => {
    const { email, password, fullName } = req.body
    async function createUser(fullName, email, password) {
        const newUser = new User({
            fullName,
            email
        });
        try {
            regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
            if (regexPass) {
                 const hashedPass = await bcrypt.hash(password, saltRounds)
                newUser.password = hashedPass
            } else {
                return res.status(401).json('Crie uma senha forte, com Letras Maisculas, minisculas e caracteres especias como @!#$%')
            }
        } catch (error){
            console.error(error)
        }
        try {
            const savedUser = await newUser.save();
            console.log('Novo usuario criado com sucesso ', savedUser.fullName)
            return res.status(201).send('Usuario cadastrado com sucesso')
        } catch (error) {
            console.error(error)
            res.send(error.message)
        }
    }
    createUser(fullName, email, password)
}