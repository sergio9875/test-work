module.exports = async ( data ) => {
    let res = data.booking_with_quality_check.map(item => item.amountWithFees).reduce((acc, bill) => bill + acc);
    if(res > 1000000) {
        return true
    } else {
        return  false
    }
}
