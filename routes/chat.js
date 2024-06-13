const express = require("express");
const userList = require("../controllers/getUsers");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.get("/list", isAuth, userList);

module.exports = router;
