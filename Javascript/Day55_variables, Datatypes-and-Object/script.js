console.log("Today we will learn Javascript Variables, Datatypes and Objects");
/* var is globally scoped */
var a = 5;
a = a+1;
var b = 6;
var c = "Aditya"

console.log(a+b);
console.log(typeof a, typeof b, typeof c);

const a1 = 6;
//a1 = a1 +1; //Not allowed


/* let is bolocked scoped */
// let x = 5;
// {
//     let x = 55;
//     console.log(x)
// }
// console.log(x)

// Datatypes

let x = "Aditya"
let y = 22;
let z = 3.55;
let p = true
let q = undefined
let r = null

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


// Object

let o = {
    name: "Aditya",
    "job role": "SDE",
    "is handsum": true
}

console.log(o)

o.salary = "10000000000";
console.log(o)