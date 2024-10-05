exports.getUsersInGermany=function getUsersInGermany(users){
    try{
        if(Object.keys(users).length==0){
            return "users List is Empty"
        }else{
            usersInGermany={}
            for(let user in users){
                if(users[user].nationality=='Germany'){
                    usersInGermany[user]=users[user]
                }
            }
            if(Object.keys(usersInGermany).length==0){
                return "No user belong to Germany"
            }else{
                return usersInGermany
            }
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}