let arr = [1,13,5,7,11];

let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }



//map
// newArr = arr.map((e, index, array)=> {
//     return e**2;
// });
// console.log(newArr);




//filter
// const greaterThan7 = (e) => {
//     if(e > 7){
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(greaterThan7));

// console.log(arr.filter((e) => {
//     if(e > 7){
//         return true;
//     }
//     return false;
// }));



//reduce
let arr2 = [1,2,3,4,5,6];

// const red = (a,b) => {
//     return a*b;
// }
// console.log(arr2.reduce(red));

console.log(arr2.reduce((a,b) => {
    return a*b;
}));