const express = require('express')

const addAmenty = require('../controller/amenties/addAmenty')
const getAmentyList = require('../controller/amenties/amenityList')

const router = express.Router()


router.post('/add',addAmenty)
router.get('/list',getAmentyList)   

module.exports = router