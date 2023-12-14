//Asyncronus nature of Javascript
//--------------------------------

// console.log('Line 1');
// console.log('Line 2');

// setTimeout(() => {
//     console.log('Line 3');
// }, 0);

// setTimeout(() => {
//     console.log('Line 4');
// }, 0);

// console.log('Line 5');



//Callback function
//-----------------

// const fn = () => {
//   console.log('nothing');
// }


// const callback = (arg, fn) => {
//   console.log(arg);
// }


// const loadScript = (src, callback) => {
//   let sc = document.createElement('script');
//   sc.src = src;
//   sc.onload = callback('Aditya', fn()); 
//   document.head.append(sc);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js', callback);



//Promises in Javascript
//----------------------
  //The solution to the callback hell is promises.
  //A promise is a "promise of code execution"

