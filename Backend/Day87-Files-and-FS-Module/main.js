const { error } = require('console');
const fs = require('fs');

let path = 'b:\\Sigma Web Development Course\\Backend\\Day87-Files-and-FS-Module\\';

console.log('Starting');
// fs.writeFileSync(path+'Aditya.txt', "i am aditya")

// fs.writeFile(path+'Aditya2.txt', "i am aditya", ()=>{
//     console.log('done');
//     fs.readFile(path+'Aditya2.txt', (error, data) => {
//         console.log(error, data.toString());
//     })
// })

fs.appendFile(path+'Aditya2.txt', " aditya", ()=>{
    console.log('done');
})


console.log('Ending');