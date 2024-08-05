const express = require("express");

const addBranch = require("../controller/branches/addBranch");
const getBranchList = require("../controller/branches/branchList");
const router = express.Router();

router.post("/add", addBranch);
router.get("/list", getBranchList);

module.exports = router;
