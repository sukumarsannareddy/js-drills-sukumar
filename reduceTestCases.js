const { reduceFucntion } = require("./reduce");


const items = [1, 2, 3, 4, 5, 5];


function cb(startingValue,items){
    console.log(startingValue,items)
}
reduceFucntion(items,cb,items[0])
