exports.getFullNames=function getFullNames(data){
    try{
        let fullNames=[]
        for(let i=0;i<data['data'].length;i++){
            fullNames.push(data['data'][i].name.join(" "))
        }
        return fullNames
    }catch(error){
        if(error.message.includes('undefined')){
            return "insufficent or invalid Data"
        }else{
            return error.message
        }
    }
}