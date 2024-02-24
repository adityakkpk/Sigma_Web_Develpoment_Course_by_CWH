// "use client"
// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"
import fs from "fs/promises"

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("Hey i am Aditya")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <>
    <Navbar/>
      <div>
        I am a component 
        {/* {count} */}
      </div>
      {/* <button onClick={()=>setcount(count+1)}>Click me</button> */}
    </>
  );
}

//NextJs has default server components