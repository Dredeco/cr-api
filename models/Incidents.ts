let mongoose = require('mongoose')
let {Schema} = mongoose

const incidentSchema = new Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    task: {
        type: String,
        unique: true
    },
    stask: {
        type: String,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    supervisor: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    system: {
        type: String,
        required: true
    },
    motive: {
        type: String,
        required: true
    },
    fixProc: {
        type: String,
    },
    observations: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Incident = mongoose.model('Incident', incidentSchema)

module.exports = {
    Incident,
    incidentSchema
}