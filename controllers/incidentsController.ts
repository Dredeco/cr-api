const {Incident: incidentModel} = require('../models/Incidents')

const incidentController = {
    create: async(req, res) => {
        try {

            const incident = {
                number: req.body.number,
                date: req.body.date,
                user: req.body.user,
                supervisor: req.body.supervisor,
                classification: req.body.classification,
                system: req.body.system,
                motive: req.body.motive,
                fixProc: req.body.ficProc,
                observations: req.body.observations
            }

            const response = await incidentModel.create(incident)

            res.status(201).json({msg: "Incidente criado com sucesso:", response})
        } catch (error) {
            console.log(error)
        }
    }
}