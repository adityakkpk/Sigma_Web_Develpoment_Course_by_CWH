// let a = Number(prompt('Enter first number:'));
// let b = Number(prompt('Enter second number:'));
// let sum = a+b;


//Finally bloch can execute after return satatement in the punction


let a = prompt('Enter first number:');
let b = prompt('Enter second number:');

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a)+parseInt(b);

try {
    console.log('The sum is: ', sum*x);
    return;
} catch (error) {
    console.log('Error aa gya bhai');
} finally {
    console.log("After return satatement finally can execute.");
    console.log('Error aaye ya na aaye mai to run karunga. Ye lo tumhara sum:');
    console.log('The sum is: ', sum);
}