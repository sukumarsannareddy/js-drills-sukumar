exports.atIndexThree=function atIndexThree(arrayOfObject){
    try{
        if(arrayOfObject.length>=4){
            return ["Name:"+arrayOfObject[3].name,"City:"+arrayOfObject[3].city]
        }else{
            return "object is short of length"
        }
    }
    catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    };
    
};


