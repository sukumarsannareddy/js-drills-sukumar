
exports.studentName=function getStudentName(arrayOfObject){
    try{
        let studentList= arrayOfObject.filter((object) => object.isStudent && object.country=="Australia").map((object)=>
        object.name)
        return studentList.length==0?"No students available":studentList
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
}