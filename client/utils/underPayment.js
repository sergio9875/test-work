const underPayment = async (amountWithFees, amountReceived) => {
    if (amountReceived < amountWithFees) return true
}

module.exports = underPayment
