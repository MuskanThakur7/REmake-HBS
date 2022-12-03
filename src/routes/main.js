const express = require('express');
const { route } = require('express/lib/application');
const routes = express.Router();
routes.get("/", (req, res) => {
    res.render("HomePage")
})
.get('/RE', (req, res) => {
    res.render("RE")
})
routes.get('/SignUp', (req, res) => {
    res.render("SignUp")
})
routes.get('/CreateTemplate', (req, res) => {
    res.render("CreateTemplate")
})
routes.get('/temp', (req, res) => {
    res.render("temp")
})
routes.get('/templates', (req, res) => {
    res.render("templates")
})
routes.get('/RE', (req, res) => {
    res.render("RE")
})

module.exports = routes