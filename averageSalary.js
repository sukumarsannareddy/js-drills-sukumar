exports.averageSalary=function averageSalary(data){
    try{
        let roles={}
        for(let i=0;i<data['data'].length;i++){
            if(data['data'][i].hr[0] in roles){
                continue
            }else{
                roles[data['data'][i].hr[0]]=[0,0]
            }
        }
        for(let i=0;i<data['data'].length;i++){
            roles[data['data'][i].hr[0]][0]+= parseInt((data['data'][i].hr[1]).replace(',','').replace('$',''))
            roles[data['data'][i].hr[0]][1]+=1
        }
        for(let role in roles){
            roles[role]=Math.ceil(roles[role][0]/roles[role][1])
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