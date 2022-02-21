
const express = require('express')
const payList = express.Router()
const {newPayment} = require('../controllers/payment')

payList.post('/', newPayment)

module.exports = payList
