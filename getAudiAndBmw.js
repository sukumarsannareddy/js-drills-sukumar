exports.getAudiAndBmw=function getAudiAndBmw(inventory){
    try{
        let cars=inventory.filter((object)=> object.car_make=="Audi" ||object.car_make=='BMW')
        return cars.length==0?"no cars available":JSON.stringify(cars)
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}