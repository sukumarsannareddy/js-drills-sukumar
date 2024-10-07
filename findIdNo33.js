exports.findIdNo=function findIdNo(inventory){
    try{
        let findIdNo33=inventory.filter((object)=> object.id==33)
        return findIdNo33.length==0?"Id no 33 is not found":findIdNo33.map((object)=>
            `Car 33 is a ${object.car_year},${object.car_make},${object.car_model}`)
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    
    }
}