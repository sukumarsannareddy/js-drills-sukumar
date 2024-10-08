const { mapFunction } = require("./map.js");

const items = [1, 2, 3, 4, 5, 5];
let new_array=[]
function cb(item){
    new_array.push(item)
}
mapFunction(items,cb)

console.log(new_array)