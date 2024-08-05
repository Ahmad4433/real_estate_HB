const express = require("express");
const userName = require("../controller/dropdown-list/userName");
const getArea = require("../controller/dropdown-list/getArea");
const router = express.Router();

router.get("/user/name", userName);
router.get("/area", getArea);

module.exports = router;
