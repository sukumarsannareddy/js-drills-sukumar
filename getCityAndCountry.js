exports.getCityCountry=function getCityCountry(arrayOfObject){
    let cityAndCountry=[]
    try{
        for(let i=0;i<arrayOfObject.length;i++){
            let city=""
            let country=""
            if(typeof(arrayOfObject[i].city)==='undefined' || arrayOfObject[i].city===""){
                city="Not Available"
            }else if(typeof(arrayOfObject[i].country)==='undefined' || arrayOfObject[i].country===""){
                country="Not Available"
            }else{
                city=arrayOfObject[i].city
                country=arrayOfObject[i].country
            }
            cityAndCountry.push(["City:"+city," || Country:"+country])
        };
        return cityAndCountry
    }catch(error){
        if(error.message.split(' ').includes('undefined')){
            return "Data is insufficent"
        }else{
            return error.message
        }
    }
};