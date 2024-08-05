const express = require("express");
const multerFile = require("../middlewares/multerFile");
const addImages = require("../controller/galary/addImages");
const {checkImagePresent} = require('../utils/index')
const router = express.Router();

router.post(
  "/add",
  multerFile().array("image"),
  checkImagePresent,
  addImages
);

module.exports = router;
