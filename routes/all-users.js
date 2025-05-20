const express = require("express");
const { allUser } = require("../controllers/all-User.js");
const allRoutes = express.Router();

allRoutes.get("/api/users",allUser)

module.exports = { allRoutes };