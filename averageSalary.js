exports.averageSalary=function averageSalary(data){
    try{
        let roles={}
        data['data'].forEach((object) => {
            if(!(object.hr[0] in roles)){
                roles[object.hr[0]]=[parseInt((object.hr[1]).replace(',','').replace('$','')),1]
            }else{
                roles[object.hr[0]][0]+=parseInt((object.hr[1]).replace(',','').replace('$',''))
                roles[object.hr[0]][1]+=1
            }
        })
        Object.keys(roles).forEach((object)=>roles[object]=Math.ceil(roles[object][0]/roles[object][1]))
        return roles
        }catch(error){
        if(error.message.includes('undefined')){
            return "insufficent or invalid Data"
        }else{
            return error.message
        }
    }
}