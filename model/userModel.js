var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = new Schema({
    id: Number,
    nom : String,
    email : String,
    age : Number
})
module.exports = mongoose.model('users', User )