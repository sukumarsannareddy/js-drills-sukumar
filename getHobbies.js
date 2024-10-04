exports.hobbiesList=function hibbiesList(arrayOfObject){
    try{
        peopleHobbies={}
        for(let i=0;i<arrayOfObject.length;i++){
            if (arrayOfObject[i].age==30){
                if (arrayOfObject[i].hobbies==[] || typeof(arrayOfObject[i].hobbies)=='undefined'){
                    peopleHobbies[arrayOfObject[i].name]="No Hobbies"
                }else{
                    peopleHobbies[arrayOfObject[i].name]=arrayOfObject[i].hobbies
                }
            }
        }
    if(Object.keys(peopleHobbies).length===0){
        return "No one has age 30"
    }else{
    return peopleHobbies
    }
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}
