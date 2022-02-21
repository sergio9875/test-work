const express = require('express')
const app = module.exports = express()
const port = process.env.BASIC_PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use('/payment', require('./routes/paymentRoute'))
app.use('/', require('./routes/paymentPage'))

console.log('start on port: ', port)

app.listen(port)
