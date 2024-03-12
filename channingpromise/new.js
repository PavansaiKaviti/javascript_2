// creating a function for returning a promise 
function step1(){
    return new Promise((resolve)=>{
        console.log('step 1 is completed');
        resolve('next to Step 1');
    });
}

// step 2
function step2(){
    return new Promise((resolve)=>{
        console.log('step 2 is completed');
        resolve('next to Step 2');
    });
}

//step3
function step3(){
    return new Promise((resolve)=>{ 
        console.log('step 3 is completed');
        resolve('next to Step 3');
    });
}

// step4
function step4(){
    return new Promise((resolve)=>{
        console.log('step 4 is completed');
        resolve('next to Step 4');
    });
}

// accessing those promises
step1()
    .then((result1) => {
        console.log(result1);
        return step2();
    })
    .then((result2) => {
        console.log(result2);
        return step3();
    })
    .then((result3) => {
        console.log(result3);
        return step4();
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('done');
    });
