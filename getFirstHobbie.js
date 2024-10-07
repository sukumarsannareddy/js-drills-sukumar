exports.getFirstHobbie=function getFirstHobbie(arrayOfObject){
    try{
        return arrayOfObject.map((object) => 
            object.hobbies[0]=="" || typeof(object.hobbies[0])==='undefined'? "no hobbies" :object.hobbies[0])
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};