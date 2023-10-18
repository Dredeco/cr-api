import { Router } from 'express'

const router = Router()

// User router
const userRouter = require('./user')
router.use(userRouter)

// Incident router
const incidentRouter = require('./incident')
router.use(incidentRouter)

module.exports = router;