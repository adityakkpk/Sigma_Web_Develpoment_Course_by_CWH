// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

// console.log("Laoding modules");

// console.log("Do something");

// console.log("Laod data");
// let data = getData();

// data.then((v)=>{
//     console.log(data);

//     console.log('process data');

//     console.log('task');
// });


// settle promise means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data  = await x.text();
    let data  = await x.json();
    return data;
}

async function main(){

    console.log("Laoding modules");

    console.log("Do something");

    console.log("Laod data");

    // let data = getData();
    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task");
}

main();