const {incidentSchema} = require('./Incidents')
const mongoose = require('mongoose')
let { Schema } = mongoose

const userSchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    incidents: [incidentSchema]
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = {User}