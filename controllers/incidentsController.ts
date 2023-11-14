import { Request, Response } from "express"
const {Incident: incidentModel} = require('../models/Incidents')

export const incidentController = {
    create: async(req: Request, res: Response) => {
        try {

            const incident = {
                number: req.body.number,
                task: req.body.task,
                sctask: req.body.sctask,
                date: req.body.date,
                user: req.body.user,
                supervisor: req.body.supervisor,
                classification: req.body.classification,
                system: req.body.system,
                fixProc: req.body.fixProc,
                observations: req.body.observations
            }

            const response = await incidentModel.create(incident)

            res.status(201).json({msg: "Incidente criado com sucesso:", response})
        } catch (error) {
            alert(error)
        }
    },

    getAll: async(req: Request, res: Response) => {
        try {
            const response = await incidentModel.find({})
            return res.status(200).json({response})
        } catch (error) {
            alert(error)
        }
    },

    get: async(req: Request, res: Response) => {
        try {
            const name = req.params.name
            const incidentUser = await incidentModel.find({user: name})

            return res.status(200).json({incidentUser})

        } catch (error) {
            alert(error)
        }
    }
}