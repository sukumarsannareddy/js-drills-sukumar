exports.defaultsFunction=function defaultsFunction(obj,defaultValue){
    Object.keys(obj).forEach((element) => {
        if(typeof(obj[element])==='undefined'){
            obj[element]=defaultValue[element]
        }
    })
    return obj
}