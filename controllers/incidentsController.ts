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
                team: req.body.team,
                supervisor: req.body.supervisor,
                classification: req.body.classification,
                system: req.body.system,
                fixProc: req.body.fixProc,
                observations: req.body.observations,
                supervisorObservations: req.body.supervisorObservations
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

    getByNumber: async(req: Request, res: Response) => {
        try {
            const number = req.params.number
            const incidentNumber = await incidentModel.findOne({"number": number})

            return res.status(200).json({incidentNumber})

        } catch (error) {
            console.log(error)
        }
    },

    getByUser: async(req: Request, res: Response) => {
        try {
            const user = req.params.name
            const incidentUser = await incidentModel.find({user: user})

            return res.status(200).json({incidentUser})

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
                team: req.body.team,
                supervisor: req.body.supervisor,
                classification: req.body.classification,
                system: req.body.system,
                fixProc: req.body.fixProc,
                observations: req.body.observations,
                supervisorObservations: req.body.supervisorObservations
            }
            const incidentNumber = await incidentModel.findOneAndUpdate({number: incident.number}, incident, {upsert: true, new: true})

            return res.status(200).json({incidentNumber})

            } catch (error) {
                console.log(error)
            }
    }
}