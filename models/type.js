const  { Schema } = require('mongoose')

const typeSchema = new Schema(
    {
        ethnicity: { type: String, required: true },
        famousChef: { type: String, required: true },
        haveTried: { type: Boolean, required: true },
    },
    { timestamps: true }
)

module.exports = (typeSchema)