import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Manager() {
  const ref = useRef();
  const passRef = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArr, setPasswordArr] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArr(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passRef.current.type = 'password';
    if (ref.current.src.includes("/eye-off.svg")) {
      ref.current.src = "/eye.svg";
      passRef.current.type = 'password';
    } else {
      ref.current.src = "/eye-off.svg";
      passRef.current.type = 'text';
    }
  };

  const savePassword = () => {
    setPasswordArr([...passwordArr, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArr, form]));
    console.log([...passwordArr, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mycontainer pt-20">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-600">&lt;</span>
          <span>Password</span>
          <span className="text-green-600">Manager/&gt;</span>
        </h1>
        <p className="text-green-900 text-xl text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            name="site"
            className="rounded-full border border-green-500 w-full py-1 px-4"
            type="text"
            placeholder="Website URL"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex w-full gap-8 justify-between">
            <input
              name="username"
              className="rounded-full border border-green-500 w-full py-1 px-4"
              type="text"
              placeholder="UserName"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                name="password"
                className="rounded-full border border-green-500 w-full py-1 px-4"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                ref={passRef}
              />
              <span className="absolute right-2 top-1 mt-[4px] cursor-pointer">
                <img
                  onClick={showPassword}
                  ref={ref}
                  src="/eye.svg"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            className="flex justify-center items-center bg-green-500 hover:bg-green-400 rounded-full w-fit px-5 py-2 text-lg gap-2 font-bold hover:border border-green-950"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        
        <div className="passwords">
          <h2 className="text-2xl py-4 font-bold">Your Passwords</h2>
          {passwordArr.length === 0 && <div>No Passwords to show</div>}
          {passwordArr.length !== 0 && <table className="table-auto w-full overflow-hidden rounded-md mb-3">
            <thead className="bg-green-600 text-white">
              <tr className="border">
                <th className="py-2 border border-white">Websites</th>
                <th className="py-2 border border-white">UserName</th>
                <th className="py-2 border border-white">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArr.map((password, index) => {
                return <tr key={index}>
                <td className="py-2 border border-white text-center w-32">
                  <a href={`https://` + password.site} target="_blank">
                  {password.site}
                  </a>
                </td>
                <td className="py-2 border border-white text-center w-32">{password.username}</td>
                <td className="py-2 border border-white text-center w-32">{password.password}</td>
              </tr>
              })}
              
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
}

export default Manager;
