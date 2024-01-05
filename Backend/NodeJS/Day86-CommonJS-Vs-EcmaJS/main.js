// const http = require('node:http');//we cannot use require method in module/Ecma Script

// import http from 'http'

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
// //   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// import { a,b,c,d } from "./myModule.js";//named imports

// // import obj from "./myModule.js";//default imports
// import adi from "./myModule.js";//default imports with different name
// console.log(adi);


const a = require('./myModule2.js');
console.log(a, __dirname, __filename);