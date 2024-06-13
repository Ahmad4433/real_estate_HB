const express = require("express");
const verifyauth = require("../controllers/verifyAuth");

const router = express.Router();

router.post("/verify", verifyauth);

module.exports = router;
