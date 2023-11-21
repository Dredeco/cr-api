import { Request, Response } from "express";
const {User: userModel} = require('./../models/User')

export const userController = {
    create: async(req: Request, res: Response) => {
        try {
            const user = {
                key: req.body.key,
                name: req.body.name,
                role: req.body.role,
                team: req.body.team
            };

            if(!user.key || !user.name || !user.role) {
                res.status(400).json({msg: "Todos os campos são obrigatórios"})
            }

            const response = await userModel.create(user);

            res.status(201).json({response, msg: "Usuário criado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req: Request, res: Response) => {
        try {
            const users = await userModel.find()
            res.status(200).json({users})
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req: Request, res: Response) => {
        try {
            const key = req.params.key.toUpperCase()
            const user = await userModel.findOne({key: key})
            console.log(key, user)

            if(!user) {
                res.status(404).json({msg: "Usuário não encontrado"})
            }

            res.status(200).json({msg: "Usuário encontrado", user})
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req: Request, res: Response) => {
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

    update: async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await userModel.findById(id)

        if(!user){
            res.status(404).json({msg: "Usuário não encontrado"})
        }

        const newUserData = {
            key: req.body.key,
            name: req.body.name,
            role: req.body.role,
            team: req.body.team
        }

        const updatedUser = await userModel.findOneAndUpdate({key: user.key}, newUserData, {upsert: true, new: true})
    
        res.status(200).json({msg: "Usuário atualizado", updatedUser})
    }

}