exports.getUsersMasterDegree= function getUsersMasterDegree(users){
    try{
        if(Object.keys(users).length==0){
            return "Users Lsit is Empty"
        }else{
            let getUsersMasterDegree={}
            Object.keys(users).filter((object)=> users[object].qualification.includes('Masters')).forEach((object)=> getUsersMasterDegree[object]=users[object])
            return Object.keys(getUsersMasterDegree).length==0?"No user done masters":getUsersMasterDegree
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Insufficent Data or invalid Data"
        }else{
            return error.message
        }
    }
}