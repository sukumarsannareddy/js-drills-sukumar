const { defaultsFunction } = require("./defaults");


const testObject = { name: 'Bruce Wayne', age: 36, location: undefined};
const defaultValues={ name: 'new name', age: 36, location: 'Gotham'};

console.log(defaultsFunction(testObject,defaultValues))