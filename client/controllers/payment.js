const path = require("path");
const fs = require("fs");
const { v4: reference } = require('uuid');

const amountWithFee = require('../utils/calculateFees')
const amountReceived = require('../utils/amountReceived')
const overPayments = require('../utils/overUnderPayment')
const underPayments = require('../utils/underPayment')
const correctEmail = require('../utils/isEmailCorrect')
const isDuplicatePayment = require('../utils/duplicatedPayment')
const isAmountTreshold = require('../utils/amountTreshold')
const createObj = require('../utils/createObj')
const users = require('../models/paymentModel')


module.exports = {

    async newPayment (req, res) {
        try{

            const { amount, student_id, email  } = req.body
            const amountFee = await amountWithFee(amount)
            const amountRes =  await amountReceived(amountFee)
            const overPay = await overPayments(amountFee, amountRes)
            const underPay = await underPayments(amountFee, amountRes)

            const newUser = {
                reference: reference(),
                amount,
                amountFee,
                amountRes,
                overPayment: overPay,
                underPayment: underPay,
                qualityCheck: {
                    invalidEmail: await correctEmail(email),
                    duplicatedPayment: await isDuplicatePayment(student_id, users),
                    amountTreshold: await isAmountTreshold(users)
                }
            }
            if (!newUser.reference || !newUser.amount)
                return res.sendStatus(400)


            let obj = await createObj(newUser, users)
            // if(!users) {
            //     fs.writeFile('request.json', JSON.stringify(users), 'utf8',function(err){
            //         if(err) return console.log(err)});
            // } else {
            //
            //     const fileData = JSON.parse(fs.readFile('request.json'))
            //     console.log(fileData)
            //     fileData.push(newUser)
            //     fs.appendFile('request.json', JSON.stringify(users), 'utf8',function(err){
            //         if(err) return console.log(err)});
            // }
            return res.status(200).send(JSON.stringify(obj))

        } catch (e) {
            console.log(e)
        }

    },

    async paymentPage  (req, res, ) {
        console.log('homepage')
        res.sendFile(path.join(__dirname+'../../src/views/booking.html'));
    },
}

