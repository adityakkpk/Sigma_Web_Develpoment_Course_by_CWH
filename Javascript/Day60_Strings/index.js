console.log("Lets Learn Strings");
console.log("------------------");

//Strings are immutable


let a = 'Aditya';
console.log("Type of a is: "+typeof a);

// Accessing individual charecter of a string
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

//Lenth of a string
console.log("Length of a is "+a.length);


//String interpolation
let first_name = 'Aditya';
let last_name = 'Kushwaha';
console.log(`My first name is ${first_name} and my sir name is ${last_name}.`);

//Escape sequence characters
console.log("Aditya is \"High\"");


// String Functions
let b = "Rakesh";

console.log(b.toUpperCase());
console.log(b.toLowerCase());

console.log(b.slice(1,4));
console.log(b.slice(1));

console.log(b.replace("sh", "77"));

console.log(b.concat(a));
console.log(b.concat(a, "Tashrif"));
console.log(b.concat(a, "Tashrif", "Friends"));

let naam = "     Aditya Kumar     ";
console.log(naam.trim());

console.log(naam.charAt(10));

console.log(naam.indexOf('y'));