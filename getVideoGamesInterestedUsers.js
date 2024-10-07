exports.getvideoGamesInterestedUsers=function getvideoGamesInterestedUsers(users){
    try{
        if(Object.keys(users).length==0){
            return "List is empty"
        }else{
            let getUsersInterestedVideoGames={}
            Object.keys(users).filter((object)=> String(users[object].interests).includes('Video Games')).forEach((object)=> getUsersInterestedVideoGames[object]=users[object])
            return Object.keys(getUsersInterestedVideoGames).length==0?"No one is interested in video games":getUsersInterestedVideoGames
        }
    }catch(error){
        if(error.message.includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}