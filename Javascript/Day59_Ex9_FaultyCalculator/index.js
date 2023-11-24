// let a = prompt("Enter number 1: ");
// let b = prompt("Enter number 2: ");

let a = 10;
let b = 5;

let rand = Math.random()*100;

if(rand <= 10){
    fautyCalculator(a,b);
}else{
    nonFaultyCalculator(a,b);
}

function fautyCalculator(a,b) {
    console.log(a + "+" + b + "=" + (a-b));
    console.log(a + "*" + b + "=" + (a+b));
    console.log(a + "-" + b + "=" + (a/b));
    console.log(a + "/" + b + "=" + (a**b));
}

function nonFaultyCalculator(a,b) {
    console.log(a + "+" + b + "=" + (a+b));
    console.log(a + "*" + b + "=" + (a*b));
    console.log(a + "-" + b + "=" + (a-b));
    console.log(a + "/" + b + "=" + (a/b));
}