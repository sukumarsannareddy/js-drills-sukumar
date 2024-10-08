const { mapObjectFunction } = require("./mapObject");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function cb(element){
    console.log(element)
}


mapObjectFunction(testObject,cb)