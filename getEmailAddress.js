exports.emailAddresses=function emailAddresses(arrayOfObjects){
    try{
        let emailList={}
        for(let i=0;i<arrayOfObjects.length;i++){
            if(arrayOfObjects[i].email==""  || typeof(arrayOfObjects[i].email)=='undefined'){
                emailList[arrayOfObjects[i].name]="No email id is found"
            }else{
                emailList[arrayOfObjects[i].name]=arrayOfObjects[i].email
            }
        }
        return emailList
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }

}