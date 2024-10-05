exports.CarsOlderThan2000=function CarsOlderThan2000(inventory){
    try{
        if(inventory.length==0){
            return "Inevntory is empty"
        }else{
            years=[]
            for(let i=0;i<inventory.length;i++){
                if(inventory[i].car_year<2000){
                    years.push(inventory[i].car_year)
                }
            }
            return years.length
        }
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}