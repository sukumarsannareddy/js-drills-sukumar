exports.groupingPeople=function groupingPeople(data){
    try{
        let roles={}
        data['data'].forEach((object)=>{
            if(object.hr[0] in roles){
                roles[object.hr[0]].push(object.name.join(" "))
            }else{
                roles[object.hr[0]]=[object.name.join(" ")]
            }
        })
        return JSON.stringify(roles)
    }catch(error){
        if(error.message.includes('undefined')){
            return "insufficent or invalid Data"
        }else{
            return error.message
        }
    }
}