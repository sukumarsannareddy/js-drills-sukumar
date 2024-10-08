const { eachFunction } = require("./each.js");

const items = [1, 2, 3, 4, 5, 5];

function cb(item,i){
    console.log(item,i)
}
eachFunction(items,cb)