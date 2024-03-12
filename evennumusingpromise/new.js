// checking weather a number is a even number are not 
function evenNumbeRMachine(num){
 return new Promise((resolve,reject)=>{
    if((num%2)==0)
    {
        resolve(`${num} is a even number`)
    }
    else{
        reject(`${num} is a odd number`)
    }

});}


evenNumbeRMachine(3).then((resolve)=>{console.log(resolve)}).catch((reject)=>{console.log(reject)}).finally(()=>{console.log("Finally we found it above")})