exports.getAudiAndBmw=function getAudiAndBmw(inventory){
    try{
        if(inventory.lenght==0){
            return "inventory is empty"
        }else{
            let audiAndBmw=[]
            for(let i=0;i<inventory.length;i++){
                if(inventory[i].car_make=='Audi' || inventory[i].car_make=='BMW'){
                    audiAndBmw.push(inventory[i])
                }
            }
            if(audiAndBmw.length==0){
                return "No Audi and Bmw cars"
            }else{
                return JSON.stringify(audiAndBmw)
            }
        }
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}