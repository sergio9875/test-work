const overPayment = async (amountWithFees, amountReceived) => {
    if(amountReceived > amountWithFees) return true
}

module.exports = overPayment

