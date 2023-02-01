import React from "react";

export default function LoginCard() {
  return (
    <div>
      <div className="w-[460px] h-[640px] bg-slate-200 m-auto rounded-lg flex flex-col shadow-lg">
        <h1 className="text-center mt-12 text-[32px]">Login</h1>
        <form className="h-full w-full">
          <ul className="flex flex-col my-20 px-12 gap-2">
            <p className="text-xl font-medium">Username</p>
            <input placeholder="Username" className="p-2 rounded-lg outline-none focus:outline-black transition-all duration-300"></input>
          </ul>
          <ul className="flex flex-col my-20 px-12 gap-2">
            <p className="text-xl font-medium">Password</p>
            <input placeholder="Password" className="p-2 rounded-lg outline-none focus:outline-black transition-all duration-300"></input>
            <a className="text-sm cursor-pointer">Forget Password?</a>
          </ul>
          <button className="flex m-auto text-2xl bg-slate-300 px-6 py-2 rounded-2xl hover:shadow-xl transition-all duration-300">Login</button>
        </form>
      </div>
    </div>
  );
}
