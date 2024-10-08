exports.filterFunction=function filterFunction(items,cb){
    for(let i=0;i<items.length;i++){
       if(items[i]<4){
            cb(items[i])
       }
    }
}