exports.findFunction=function findFunction(items,cb){
    for(let i=0;i<items.length;i++){
       if(items[i]==5){
        return cb(items[i])
       }
    }
}