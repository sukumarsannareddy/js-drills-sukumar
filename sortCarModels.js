exports.sortCarModels= function sortCarModels(inventory){
    try{
        if(inventory.length==0){
            return "Inventory is empty"
        }return JSON.stringify(inventory.sort((a,b)=>a.car_model.localeCompare(b.car_model)))
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        } 
    }
};