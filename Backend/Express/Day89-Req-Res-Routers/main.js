const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log('Its a get request');
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log('Its a post request');
  res.send('Hello World! post')
}).put('/', (req, res) => {
    console.log('Its a put request');
  res.send('Hello World! put')
})

app.get('/index', (req, res) => {
    console.log('Its a index');
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
  res.json({a:1,b:2,c:3, name: ["aditya", "kumar"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})