exports.getFirstHobbie=function getFirstHobbie(arrayOfObject){
    try{
        firstHobbie={}
        for(let i=0;i<arrayOfObject.length;i++){
            if(arrayOfObject[i].hobbies.length<1){
                firstHobbie[arrayOfObject[i].name]="No Hobbies"
            }else{
                firstHobbie[arrayOfObject[i].name]= arrayOfObject[i].hobbies[0]
            }
            
        }
        return firstHobbie
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};