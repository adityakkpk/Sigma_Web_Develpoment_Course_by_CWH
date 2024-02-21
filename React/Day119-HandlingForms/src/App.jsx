import { useForm } from "react-hook-form"

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", {require: {value: true, message: "this field is required"}, minLength: {value: 5, message: "minimum length is 5"}})} type="text" /><br />
          {errors.username && <div>{errors.username.message}</div>}
          <input {...register("password", { required: true})} type="password" /><br />
          <input type="submit" value="submit" />
        </form>

      </div>
    </>
  )
}

export default App
