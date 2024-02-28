"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  let ref = useRef()

  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div >
          <label htmlFor="name">Name</label>
          <input type="text" className="text-black" name="name" id="name" />
        </div>
        <div >
          <label htmlFor="address">Address</label>
          <input type="text" className="text-black" name="address" id="address" />
        </div>
        <div>
          <button className="bg-sky-400">Submit</button>
        </div>
      </form>
    </div>
  );
}
