exports.getvideoGamesInterestedUsers=function getvideoGamesInterestedUsers(users){
    try{
        if(Object.keys(users).length==0){
            return "List is empty"
        }else{
            interestedUsers={}
            for(let user in users){
                try{
                    if(users[user].interests[0].includes('Video Games')){
                        interestedUsers[user]=users[user]
                    }
                }catch(error){
                    continue
                }
            }
            if(Object.keys(interestedUsers).length==0){
                return "No one is interested in Video Games"
            }else{
                return interestedUsers
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