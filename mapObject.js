exports.mapObjectFunction=function mapObjectFunction(obj,cb){
    Object.keys(obj).forEach((element)=>{
        if(element=='age'){
            obj[element]+=10
        }
        cb(obj[element])
    })
}