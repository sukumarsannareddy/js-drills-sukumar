
exports.studentName=function getStudentName(arrayOfObject){
    try{
        let names=[]
        for(let i=0;i<arrayOfObject.length;i++){
            if (arrayOfObject[i].isStudent && arrayOfObject[i].country=="Australia"){
                names.push(arrayOfObject[i].name)
            }
        }
    if(names.length==0){
        return "No students available"
    }else{
        return names
    }
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}