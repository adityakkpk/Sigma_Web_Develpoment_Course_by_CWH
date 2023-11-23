console.log("Lets learn finctions...");
console.log("-----------------------");

// function nice(name){
//     console.log("Hey " + name + ", How are yoy?");
// }
// nice("Rohan");
// nice("Shivam");
// nice("Aditya");
// nice("Aman");


// function sum(a, b) {
//     console.log(a + b);
// }
// sum(1,2);
// sum(3,2);
// sum(5,6);
// sum(67,2);


// function sum(a, b) {
//     return a + b;
// }
// result = sum(3,5);
// console.log("Sum of 3 and 5 is: "+result);


//Defaut parameter
function sum(a=3, b=3, c=3) {
    return a + b + c;
}
result1 = sum(3,5,6);
result2 = sum(3,5);
result3 = sum(3);
result4 = sum();
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//arrow function
const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(3348);
func1(44);