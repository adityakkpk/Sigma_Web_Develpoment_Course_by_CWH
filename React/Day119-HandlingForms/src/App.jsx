import { useForm } from "react-hook-form"

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((res, rej)=>{
      setTimeout(() => {
        res();
      }, d*1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(4); // simulating network delay

    let r = await fetch("http://localhost:3000/", { method: "POST", headers:{"Content-Type":"application/json",}, body: JSON.stringify(data) })
    let res = await r.text();
    console.log(data, res)

    // if(data.username !== "Aditya"){
    //   setError("myForm", {message: "Username is invalid"})
    // }
    // if(data.username === "Akkpk"){
    //   setError("myForm", {message: "Akkpk is Blocked"})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading</div> }
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input {...register("username", {required: {value: true, message: "this field is required"}, minLength: {value: 5, message: "minimum length is 5"}, maxLength: {value: 15, message: "maximum length is 5"}})} type="text" /><br />
          {errors.username && <div>{errors.username.message}</div>}

          <input {...register("password", { required: {value: true, message: "this field is required"}, minLength: {value: 5, message: "minimum length is 5"}})} type="password" /><br />
          {errors.password && <div>{errors.password.message}</div>}

          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myForm && <div>{errors.myForm.message}</div>}
        </form>

      </div>
    </>
  )
}

export default App
