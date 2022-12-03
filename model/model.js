const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required: true
    }
})

let entry = new mongoose.model("entry",schema)
module.exports = entry