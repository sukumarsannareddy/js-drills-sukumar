
exports.getPeopleAges= function getPeopleAges(arrayOfObject){
    try{
        let ages={}
        arrayOfObject.map((object) => object.age=="" || typeof(object.age)==='undefined'?
        ages[object.name]="age not available":ages[object.name]=object.age)
        return ages
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}
