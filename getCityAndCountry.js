exports.getCityCountry=function getCityCountry(arrayOfObject){
    let cityAndCountry=[]
    try{
        return arrayOfObject.map((object) =>
            [typeof(object.city)==='undefined' || object.city=="" ? "city not available":object.city,
               typeof(object.country)==='undefined' || object.country=="" ? "country not available":object.country])
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};