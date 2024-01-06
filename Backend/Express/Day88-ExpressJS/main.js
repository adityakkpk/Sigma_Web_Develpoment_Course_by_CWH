const express = require('express')
const app = express()
const port = 5500

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

// app.get('/blog/intro-to-jd', (req, res) => {
//   res.send('Hello JS!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello python!')
// })

app.get('/blog/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
  res.send(`hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) => {
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});