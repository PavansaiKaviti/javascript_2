function step1(){
    return new Promise((resolve)=>{
        resolve(' p1 : hi my name is pavansai, whats your name please')
    })
}
function step2(){
    return new Promise((resolve)=>{
        resolve(' p2 : hello, my name is Dino')
    })
}
function step3(){
    return new Promise((resolve)=>{
        resolve(' p1 : what are your plans today')
    })
}
function step4(){
    return new Promise((resolve)=>{
        resolve(' p2 : nothing intrested what about you ')
    })
}

step1().then((result)=>{console.log(result); return step2()}).then((result)=>{console.log(result); return step3()}).then((result)=>{console.log(result); return step4()}).then((result)=>{console.log(result)})
