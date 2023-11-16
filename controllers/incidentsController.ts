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
            console.log(error)
        }
    },

    getAll: async(req: Request, res: Response) => {
        try {
            const response = await incidentModel.find({})
            return res.status(200).json({response})
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req: Request, res: Response) => {
        try {
            const number = req.params.number
            const incidentNumber = await incidentModel.findOne({"number": number})

            return res.status(200).json({incidentNumber})

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req: Request, res: Response) => {
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
                observations: req.body.observations,
                supervisorObservations: req.body.supervisorObservations
            }
            const incidentNumber = await incidentModel.findOneAndUpdate(incident.number, incident)

            return res.status(200).json({incidentNumber})

            } catch (error) {
                console.log(error)
            }
    }
}