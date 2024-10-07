exports.CarsOlderThan2000=function CarsOlderThan2000(inventory){
    try{
        let noOfcars=inventory.filter((object)=>object.car_year<2000).length
        return noOfcars==0?"No car is older than 2000 year":noOfcars
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}