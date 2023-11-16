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
    .route("/incident/:number")
    .get((req: Request, res: Response) => incidentController.getByNumber(req, res))

router
    .route("/incident/user/:name")
    .get((req: Request, res: Response) => incidentController.getByUser(req, res))

router
    .route("/incident/:number")
    .post((req: Request, res: Response) => incidentController.update(req, res))

module.exports = router;