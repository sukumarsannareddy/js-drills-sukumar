const { filterFunction } = require("./filter")


const items = [1, 2, 3, 4, 5, 5]

function cb(item) {
    console.log(item)
}
filterFunction(items, cb)