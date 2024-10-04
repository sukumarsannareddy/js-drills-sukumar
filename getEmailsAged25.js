exports.emailsOfAged25=function emailsOfAged25(arrayOfObject){
    try{
        emails={}
        for(let i=0;i<arrayOfObject.length;i++){
            if(arrayOfObject[i].age>=25){
                if(arrayOfObject[i].email=="" || typeof(arrayOfObject[i].email)==='undefined'){
                    emails[arrayOfObject[i].name]="No Email Id"
                }else{
                emails[arrayOfObject[i].name]=arrayOfObject[i].email
                };
            };
        };
        if(Object.keys(emails).length==0){
            return "all are aged below 25"
        }else{
            return emails
        }
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};