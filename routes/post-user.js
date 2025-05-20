const {Router} = require("express")
const {addUser} = require("../controllers/add-User.js")
const addRoute = Router();

addRoute.post("/api/users", addUser)

module.exports = { addRoute }