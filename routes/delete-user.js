const express = require("express")
const { deleteUser } = require("../controllers/delete-User.js")
const deleteRoutes = express.Router()

deleteRoutes.delete("/api/users/:id", deleteUser)

module.exports = { deleteRoutes }