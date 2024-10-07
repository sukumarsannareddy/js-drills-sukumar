exports.emailsOfAged25=function emailsOfAged25(arrayOfObject){
    try{
        let emails=arrayOfObject.filter((object) => object.age>=25).map((object) =>
        typeof(object.email)==='undefined' || object.email==""? "Email not found" : object.email )
        return emails.length==0?"No one is aged above 25":emails
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};