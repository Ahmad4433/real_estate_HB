const express = require("express");
const addReview = require("../controller/reviews/addReview");
const getReview = require("../controller/reviews/getReview");
const deleteReview = require("../controller/reviews/deleteReview");

const router = express.Router();

router.post("/add", addReview);
router.get("/get", getReview);
router.delete("/delete", deleteReview);

module.exports = router;
