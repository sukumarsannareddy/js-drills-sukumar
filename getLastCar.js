exports.getLastCar=function getLastCar(inventory){
    try{
        let lastCar=[]
        if(inventory.length==0){
            return "inventory is empty"
        }else{
             lastCar=inventory[inventory.length-1]
        }return "Last car is a "+lastCar.car_make+","+lastCar.car_model
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }  
    }   
}