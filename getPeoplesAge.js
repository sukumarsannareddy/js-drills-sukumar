
exports.getPeopleAges= function getPeopleAges(arrayOfObject){
    try{
        let peopleAges=[];
        for(let i=0;i<arrayOfObject.length;i++){
            if(typeof(arrayOfObject[i].age)==='undefined'){
                peopleAges.push("Age is Not available")
            }else{
                peopleAges.push(arrayOfObject[i].age)
            }
        }
        return peopleAges
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}
