const {User: userModel} = require('../models/User.ts')

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                key: req.body.key,
                name: req.body.name,
                password: req.body.password,
            };

            if(!user.key || !user.name || !user.password) {
                res.status(400).json({msg: "Todos os campos são obrigatórios"})
            }

            const response = await userModel.create(user);

            res.status(201).json({response, msg: "Usuário criado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            const response = await userModel.find()
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.findById(id)

            if(!user) {
                res.status(404).json({msg: "Usuário não encontrado"})
            }

            res.status(200).json({msg: "Usuário encontrado", user})
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não encontrado"})
            }

            const deletedUser = await userModel.findByIdAndDelete(id)

            res.status(200).json({msg: "Usuário excluído", deletedUser})
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        const id = req.params.id;
        const user = await userModel.findById(id)

        if(!user){
            res.status(404).json({msg: "Usuário não encontrado"})
        }

        const newUserData = {
            key: req.body.key,
            name: req.body.name,
            password: req.body.password
        }

        const updatedUser = await userModel.findByIdAndUpdate(id, newUserData)
    
        res.status(200).json({msg: "Usuário atualizado", newUserData})
    }

}

module.exports = userController;