exports.groupingPeople=function groupingPeople(data){
    try{
        let roles={}
        for(let i=0;i<data['data'].length;i++){
            if(data['data'][i].hr[0] in roles){
                continue
            }else{
                roles[data['data'][i].hr[0]]=[]
            }
        }
        for(let i=0;i<data['data'].length;i++){
            roles[data['data'][i].hr[0]].push(data['data'][i].name.join(" "))
        }
        return JSON.stringify(roles)
    }catch(error){
        if(error.message.includes('undefined')){
            return "insufficent or invalid Data"
        }else{
            return error.message
        }
    }
}