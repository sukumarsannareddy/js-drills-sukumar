const { flattenFunction } = require("./flatten");
const nestedArray = [1, [2], [[3]], [[[4]]]]; 
console.log(flattenFunction(nestedArray));