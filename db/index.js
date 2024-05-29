const mongoose = require(`mongoose`)
mongoose
    .connect(`mongodb+srv://parpace:tyghbn11@student-cluster.ta01bhl.mongodb.net/?retryWrites=true&w=majority&appName=student-cluster`)
    .then(() => console.log(`connected to mongodb`))
    .catch((e) => console.error(`error`, e.message))

mongoose.set(`debug`, true)

const db = mongoose.connection

module.exports = (db)