const amountReceived = async (price) => {
    const arr = []
    let range = Math.floor(Math.random()*200) + 1
        range *= Math.round(Math.random()) ? 1 : -1
    let sum = (price + range)
    arr.push(sum,price)

 return arr[Math.floor(Math.random() * arr.length)]

}
module.exports = amountReceived
