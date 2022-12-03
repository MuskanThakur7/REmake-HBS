const express = require('express');
const path = require('path')
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main')
const mongoose = require("mongoose")
const add = require("../model/model.js")
let model = require("../model/model.js")
app.set('view engine', 'hbs')
app.set("views", "views")
app.use('/static', express.static("public"))
hbs.registerPartials("views/partials")
// hbs.registerPartials("model")

// hbs.registerPartials("../model")

app.use('', routes)
const entry = require('../model/model')

let connectdb = require("../connection/connectdb")
connectdb()

app.use(express.urlencoded({ extended : true}))
add()

app.post("/SignUp", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let ent = new entry({
        email : email,
        password : password,
    })

    ent.save()
    res.redirect('/')
    res.sendFile(path.join(__dirname, "/"))
})

app.listen(process.env.PORT | 3000, () => {
    console.log("server started")
})