exports.getCarYears=function getCarYears(inventory){
    try{
        let carYears= inventory.map((object)=>
            typeof(object.car_year)==='undefined'||object.car_year==""?"Year not available":object.car_year)
        return carYears.length==0?'Inventory is empty':JSON.stringify(carYears)
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }  
    }
}