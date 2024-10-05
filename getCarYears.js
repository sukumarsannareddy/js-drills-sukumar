exports.getCarYears=function getCarYears(inventory){
    try{
        if(inventory.length==0){
            return "inventory is empty"
        }
        let years=[]
        for(let i=0;i<inventory.length;i++){
            years.push(inventory[i].car_year)
        }
        return years
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }  
    }
}