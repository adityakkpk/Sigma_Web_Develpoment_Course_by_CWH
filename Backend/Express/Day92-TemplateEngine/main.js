const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = 'addidas';
    let searchedText = 'Search Now';
    let arr = [1, 54, 65]
    res.render('index', {siteName: siteName, searchedText: searchedText, arr})
})

app.get('/blog/', (req, res) => {
    let blogTitle = 'My Life';
    let blogContant = 'contant';
    res.render('blogPost', {blogTitle: blogTitle, blogContant: blogContant})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})