// let a = 10;
// let b = 5;

let a = prompt("Enter number 1: ");
let b = prompt("Enter number 2: ");
let c = prompt("Enter operation: ");

let rand = Math.random()*100;

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**' 
}

if(rand > 10){

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

