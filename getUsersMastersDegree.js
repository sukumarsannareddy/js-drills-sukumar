exports.getUsersMasterDegree= function getUsersMasterDegree(users){
    try{
        if(Object.keys(users).length==0){
            return "Users Lsit is Empty"
        }else{
            userMastersDegree={}
            for(let user in users){
                if(users[user].qualification.includes('Masters')){
                    userMastersDegree[user]=users[user]
                }
            }
            if(Object.keys(userMastersDegree).length==0){
                return "No user with Qualification Masters"
            }else{
                return userMastersDegree
            }
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Insufficent Data or invalid Data"
        }else{
            return error.message
        }
    }
}