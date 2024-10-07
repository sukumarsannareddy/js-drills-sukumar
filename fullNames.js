exports.getFullNames=function getFullNames(data){
    try{
        return data['data'].map((object)=> object.name.join(" "))
    }catch(error){
        if(error.message.includes('undefined')){
            return "insufficent or invalid Data"
        }else{
            return error.message
        }
    }
}