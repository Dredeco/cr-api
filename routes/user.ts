import { Request, Response, Router } from 'express'
import { userController } from "../controllers/userController"

const router = Router()

router
    .route("/user")
    .post((req: Request, res: Response) => userController.create(req, res))

router
    .route("/user")
    .get((req: Request, res: Response) => userController.getAll(req, res))

router
    .route("/user/:key")
    .get((req: Request, res: Response) => userController.get(req, res))

router
    .route("/user/:id")
    .delete((req: Request, res: Response) => userController.delete(req, res))

router
    .route("/user/:id")
    .put((req: Request, res: Response) => userController.update(req, res))

module.exports = router;