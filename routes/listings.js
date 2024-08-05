const express = require("express");
const multerFile = require("../middlewares/multerFile");
const addListing = require("../controller/add-listings/addListing");
const getAllListing = require("../controller/get-listings/getAllListing");
const getFilteredListing = require("../controller/get-listings/getFilteredListing");
const deleteListing = require("../controller/add-listings/deleteListing");
const getSingleListingById = require("../controller/get-listings/singleListingById");
const updateListing = require("../controller/add-listings/updateListing");
const updateListingActions = require("../controller/add-listings/updateListinActions");
const router = express.Router();

router.post("/add", multerFile().array("image"), addListing);
router.get("/list", getAllListing);
router.post("/filter/list", getFilteredListing);
router.delete("/delete", deleteListing);
router.get("/single", getSingleListingById);
router.put("/update", updateListing);
router.put("/update/action", updateListingActions);

module.exports = router;
