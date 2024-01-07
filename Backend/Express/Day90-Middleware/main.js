const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const blog = require('./routes/blog')

const path = 'B:\\Sigma Web Development Course\\Backend\\Express\\Day90-Middleware\\';

// app.use(express.static('public'));

app.use('/blog', blog)

//Middeware 1 - logger for our app
app.use((req, res, next)=> {
    console.log(req.headers);
    req.aditya = ' I am aditya';
    console.log(`${Date.now()} is a ${req.method}`);
    fs.appendFileSync(path+"logs.txt", `${Date.now()} is a ${req.method}\n`)
    // res.send('Hacked by m1')
    next();
});

//Middleware2
app.use((req, res, next)=> {
    console.log('m2');
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!2')
})

app.get('/about', (req, res) => {
  res.send('Hello About!' + req.aditya)
})

app.get('/contact', (req, res) => {
  res.send('Hello contacts!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})