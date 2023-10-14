const mongoose = require('mongoose')

const main = async () => {
    try {
        await mongoose.connect('mongodb+srv://andre:ylEw6UyHYqWFYrmY@cluster0.so07ols.mongodb.net/?retryWrites=true&w=majority')
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;