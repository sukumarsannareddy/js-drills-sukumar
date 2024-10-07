exports.emailAddresses=function emailAddresses(arrayOfObjects){
    try{
        return arrayOfObjects.map((object) => typeof(object.email)==='undefined' || object.email=="" ? "Email not available":object.email);
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }

}