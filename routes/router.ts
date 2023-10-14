const router = require('express').Router()

// User router
const userRouter = require('./user.ts')
router.use("/user", userRouter)

const incidentRouter = require('./incident.ts')
router.use('/incident', incidentRouter)

module.exports = router;