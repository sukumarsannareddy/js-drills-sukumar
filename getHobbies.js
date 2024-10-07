exports.hobbiesList=function hibbiesList(arrayOfObject){
    try{
       let hobbiesList={}
       arrayOfObject.filter((object) => object.age==30).map((object)=> 
        hobbiesList[object.name]=object.hobbies)
       return Object.keys(hobbiesList).length==0 ? "No one is aged 30" : hobbiesList
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}
