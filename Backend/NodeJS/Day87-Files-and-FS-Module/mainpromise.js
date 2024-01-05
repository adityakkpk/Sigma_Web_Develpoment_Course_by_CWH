import fs from 'fs/promises';

let path = 'b:\\Sigma Web Development Course\\Backend\\Day87-Files-and-FS-Module\\';

let a =  await fs.readFile(path+'Aditya2.txt');

console.log(a.toString());

// await fs.writeFile(path+'Aditya2.txt', "\n\n\n\nThis is amazing promise")


await fs.appendFile('b:\\Sigma Web Development Course\\Backend\\Day87-Files-and-FS-Module\\Aditya2.txt', "\n\n\n\nThis is amazing. \nappending the file");
