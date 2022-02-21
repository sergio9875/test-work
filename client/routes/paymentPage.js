const express = require('express')
const payment = express.Router()
const { paymentPage} = require('../controllers/payment')

payment.get('/',paymentPage)

module.exports = payment
