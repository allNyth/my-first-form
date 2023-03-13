const User = require('../models/userSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.registerUser = async (req, res) => {
    const { email, password, firstname, lastname, number } = req.body
    async function createUser(email, password, firstname, lastname, number) {
        const newUser = new User({
            email,
            firstname,
            lastname,
            number
        });
        try {
            const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
            if (regexPass) {
                console.log(regexPass)
                const hashedPass = await bcrypt.hash(password, saltRounds)
                newUser.password = hashedPass

            } else {
                return res.status(401).json('Crie uma senha forte, com Letras Maisculas, minisculas e caracteres especias como @!#$%')
            }
        } catch (error) {
            console.error(error)
        }
        try {

            const savedUser = await newUser.save();
            console.log('Novo usuario criado com sucesso ', savedUser)
            return res.status(201).send('Usuario cadastrado com sucesso')
        } catch (error) {
            console.error(error)
            res.send(error.message)
        }
    }
    createUser(email, password, firstname, lastname, number)
}