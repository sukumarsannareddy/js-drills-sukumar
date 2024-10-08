exports.mapFunction=function mapFunction(items,cb){
    for(let i=0;i<items.length;i++){
        cb(items[i]*2)
    }
}