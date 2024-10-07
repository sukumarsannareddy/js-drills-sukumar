exports.getUsersInGermany=function getUsersInGermany(users){
    try{
        if(Object.keys(users).length==0){
            return "users List is Empty"
        }else{
            let getUsersInGermany={}
            Object.keys(users).filter((object)=> users[object].nationality=="Germany").forEach((object)=> getUsersInGermany[object]=users[object])
            return Object.keys(getUsersInGermany).length==0?"No user belongs to germay":getUsersInGermany
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}