//Promises in Javascript
//----------------------
  //The solution to the callback hell is promises.
  //A promise is a "promise of code execution"

console.log('promises');

let prom1 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random no was supporting you");
    }else {
        setTimeout(()=>{
            console.log('Yes i am done');
            resolve('Aditya');
        }, 3000);
    }
});


let prom2 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random no was supporting you 2");
    }else {
        setTimeout(()=>{
            console.log('Yes i am done 2');
            resolve('Aditya 2');
        }, 3000);
    }
});

// let p3 = Promise.all([prom1, prom2]);
// let p3 = Promise.allSettled([prom1, prom2]);
let p3 = Promise.race([prom1, prom2]);

p3.then((a)=>{
console.log(a);
}).catch(err => {
    console.log(err);
})