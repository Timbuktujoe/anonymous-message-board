const mongoose = require("mongoose")
const db = mongoose.connect('mongodb+srv://timbuktujoe:' + process.env.PW + '@cluster0.78rn7.mongodb.net/anonymous_message_board?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

module.exports = db

