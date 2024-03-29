import React from "react";

function Manager() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="bg-slate-100 mycontainer">
        <h1 className="text-4xl text font-bold text-center">
            <span className='text-green-600'>&lt;</span>
            <span>Password</span>
            <span className='text-green-600'>Manager/&gt;</span>
        </h1>
        <p className="text-green-900 text-xl text-center">Your own password manager</p>
        <div className="text-black flex flex-col p-4 gap-5">
            <input className="rounded-full border border-green-500 w-full py-1 px-4" type="text" />
            <div className="flex w-full gap-8 justify-between">
                <input className="rounded-full border border-green-500 w-full py-1 px-4" type="text" />
                <input className="rounded-full border border-green-500 w-full py-1 px-4" type="text" />

            </div>
            <button>Add Password</button>
        </div>
      </div>

    </>
  );
}

export default Manager;
