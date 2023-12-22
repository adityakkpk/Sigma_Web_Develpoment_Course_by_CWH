async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//IIFE
// ( async function main() {
//     let a = await sleep();
//     let b = await sleep();
//     console.log(a);
//     console.log(b);
// })();


/*
//Destructuring
// let a, b = [1,2]

// let [a, b] = [1,2]
// console.log(a,b);

let [x,y, ...rest] = [1,5,7,4,5,6,7,]
console.log(x);
console.log(y);
console.log(rest);

let obj  = {
    a: 1,
    b: 2,
    c: 3
}

// let a = obj.a;
// let b = obj.b;

let {a,b} = obj
console.log(a,b);
*/


//Spread Operator

function sum(a,b,c) {
    return a+b+c;
}
let arr = [1,2,3]
console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));

let array = [1,5,3,5,6];
let obj = {...array};
console.log(obj);//{0: 1, 1: 5, 2: 3, 3: 5, 4: 6}