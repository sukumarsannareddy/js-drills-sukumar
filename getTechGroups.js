exports.getTechGroups=function getTechGroups(users){
    try{
        let usersGroup={"Python" : [],"Golang" : [],"Javascript" : []}
        let techs=["Python","Javascript","Golang"]
        for(let user in users){
            for(let i=0;i<techs.length;i++){
                if(users[user].desgination.includes(techs[i])){
                    usersGroup[techs[i]].push(users[user])
                }
        
            }
        }
        if(usersGroup['Python'].length==0 && usersGroup['Golang'].length==0 && usersGroup['Javascript'].length==0){
            return "user List is empty"
        }else{
            return usersGroup
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Insufficent or invalid data"
        }else{
            return error.message
        }
    }
}