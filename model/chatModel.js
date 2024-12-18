var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Chat = new Schema({

    msg: String,
    datecreation: Date,
})
module.exports = mongoose.model('Chats', Chat)
