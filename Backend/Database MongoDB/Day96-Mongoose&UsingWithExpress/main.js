import mongoose from "mongoose";
import express  from "express";
import { todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const myTodo = new todo({name: "Aditya", desc: 'Learn something', isDone: false, days: 3});
//   const myTodo = new todo({name: "Aditya", desc: 'Learn something', isDone: false, days: "adi"});
  myTodo.save();
  res.send('Hello World!')
})


app.get('/a', async (req, res) => {
  let todom = await todo.findOne({});
  res.json({name: todom.name, desc: todom.desc});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})