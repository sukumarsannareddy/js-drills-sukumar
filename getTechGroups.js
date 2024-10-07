exports.getTechGroups=function getTechGroups(users){
    try{
        let usersGroup={"Python" : [],"Golang" : [],"Javascript" : []}
        Object.keys(users).forEach((object) => {
            if(users[object].desgination.includes('Python')){
                usersGroup['Python'].push(users[object])
            }else if(users[object].desgination.includes('Golang')){
                usersGroup['Golang'].push(users[object])
            }else if(users[object].desgination.includes('Javascript')){
                usersGroup['Javascript'].push(users[object])
            }
        }
        );
        return usersGroup       
    }catch(error){
        if(error.message.includes('undefined')){
            return "Insufficent or invalid data"
        }else{
            return error.message
        }
    }
}