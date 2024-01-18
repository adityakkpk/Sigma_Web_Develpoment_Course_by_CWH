const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./modules/Employee');

mongoose.connect('mongodb://127.0.0.1:27017/Company');
const app = express();
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * (arr.length-1));
  return arr[rno];
}

app.get('/', (req, res) => {
  res.render('index', {})
})

app.get('/generate', async (req, res) => {
  //Generate Random Data
  let randomName = ['Aditya', 'aman', 'price'];
  let randomLang = ['Python', 'Java', "Javascript"];
  let randomCities = ['JAipur', 'kolkata', 'mumbai'];
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
        name: getRandom(randomName),
        salary: Math.round(Math.random(0, 220000)),
        language: getRandom(randomLang),
        city: getRandom(randomCities),
        isManager: Math.random()>0?true:false
    })
    
    // await e.save();
  }
  res.render('index', {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})