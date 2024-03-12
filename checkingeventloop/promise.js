// creating a promise
const simplepromise=new Promise((win,loose)=>{
    console.log('These is about the decison of a runnig game:')
    const decision= true;
    if(decision){
        win(`pavansai :has won the race`)
    }
    else{
        loose(`pavansai has lost the race`)

    }
    
})
simplepromise.then((winner)=>{console.log(winner)}).catch((runner)=>{console.log(runner)}).finally(()=>{console.log(` result has been declaed at : ${ new Date()}`)})