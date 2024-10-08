exports.flattenFunction=function flattenFunction(nestedArray){
    return String(nestedArray).split(',').map((element)=>parseInt(element))
}