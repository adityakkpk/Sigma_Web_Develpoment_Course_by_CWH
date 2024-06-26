/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const NavBar = ({ color }) => {
  //Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render");
  });

  //Case 2: Run only on first render
  useEffect(() => {
    alert("Hey welcome on my page. This is the first render");
  }, []);

  //Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  //Example of cleanup() function
  useEffect(() => {
    alert("Hey welcome to the page, this is the first render of app.jsx");
    //Cleanup function {Optional} : This function will run when component will unmount
    return ()=> {
      alert("Component was unmounted")
    }
  }, []);
  

  return <div>I am NavBar of {color} color hehehe...</div>;
};

export default NavBar;
