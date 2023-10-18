import { Request, Response, Router } from 'express'
import { incidentController } from '../controllers/incidentsController'

const router = Router()

router
    .route("/incident")
    .post((req: Request, res: Response) => incidentController.create(req, res))

router
    .route("/incident")
    .get((req: Request, res: Response) => incidentController.getAll(req, res))

router
    .route("/incident/:name")
    .get((req: Request, res: Response) => incidentController.get(req, res))

module.exports = router;