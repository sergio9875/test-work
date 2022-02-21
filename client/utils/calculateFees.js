module.exports = async ( price ) => {
    if(price) {
            let fees = 0;
            if (price <= 1000) fees = price * 5 / 100
            if (price > 1000 && price <= 10000) fees = price * 3 / 100
            if (price > 10000) fees = price * 2 / 100
            return Number(fees) + Number(price)
    }
    else {
        throw new Error('Price not found')
    }
}
