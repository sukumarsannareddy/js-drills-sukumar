exports.findIdNo=function findIdNo(inventory){
    try{
        for(let i=0;i<inventory.length;i++){
            if(inventory[i].id==33){
                return "Car 33 is a " +inventory[i].car_year+","+inventory[i].car_make+","+inventory[i].car_model
            }
        }
        return "Id number 33 not Found"
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    
    }
}