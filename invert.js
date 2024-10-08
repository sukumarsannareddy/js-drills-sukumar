exports.invertFunction=function invertFunction(obj){
    let newObj={}
    Object.keys(obj).forEach((element) => {
        newObj[obj[element]]=element

    })
    return newObj
}