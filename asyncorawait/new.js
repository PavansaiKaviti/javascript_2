async function num1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(20);
        },4000)
    })
}
async function num2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(24);
        },5000)
    })
}

async function mix(){
    const result= await Promise.all([num1(),num2()])
    console.log(result)
    let acc=0
    const sum=result.map((e)=>{
        acc=e+acc;
        
    });
        console.log(acc)
}
mix();