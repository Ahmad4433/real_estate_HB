const express = require("express");
const addUser = require("../controller/users/addUser");
const getUsers = require("../controller/users/getUsers");
const updateUser = require("../controller/users/updateUser");
const deletedUser = require("../controller/users/deleteUser");

const router = express.Router();

router.post("/add", addUser);
router.get("/list", getUsers);
router.put("/update", updateUser);
router.delete("/delete", deletedUser);

module.exports = router;
