const express = require("express")
const updateRoutes = express.Router()

const {updateUser} = require("../controllers/update-User.js")

updateRoutes.patch("/api/users/:id", updateUser)

module.exports = { updateRoutes }