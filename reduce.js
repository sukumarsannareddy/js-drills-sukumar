exports.reduceFucntion = function reduceFucntion(items, cb, startingValue) {
    for (let i = 0; i < items.length; i++) {
        items[i] > startingValue ? startingValue = items[i] : null
    }
    cb(startingValue, items)
}
