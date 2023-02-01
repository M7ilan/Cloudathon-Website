import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../images/UIs";

export default function Navbar() {
  const [Toggle, SetToggle] = useState(false);

  return (
    <div>
      <div className={Toggle ? "px-12 py-6 flex items-center justify-between bg-slate-200" : "px-12 py-6 mb-32 flex items-center justify-between bg-slate-200"}>
        <Link to="/" className="cursor-pointer text-4xl font-bold flex">
          Cloudathon
        </Link>

        <div className="lg:flex hidden">
          <Link to="/" className="mx-4 font-medium px-4 py-2 cursor-pointer text-2xl">
            Home
          </Link>
          <Link to="/About" className="mx-4 font-medium px-4 py-2 cursor-pointer text-2xl">
            About
          </Link>
          <Link to="/Login" className="mx-4 font-medium bg-gray-300 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl">
            Login
          </Link>
          <Link to="/SignUp" className="mx-4 font-medium bg-gray-300 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl">
            Sign Up
          </Link>
        </div>

        <div className="lg:hidden flex">
          <img src={Toggle ? close : menu} className="h-6 w-6 my-3 object-contain cursor-pointer" onClick={() => SetToggle(!Toggle)} />
        </div>
      </div>
      <div className={Toggle ? "flex" : "hidden"}>
        <div className="flex flex-col mb-32 w-full gap-4 p-8 bg-slate-200 transition-all">
          <Link to="/" className="mx-4 font-medium px-4 py-2 cursor-pointer text-2xl text-center">
            Home
          </Link>
          <Link to="/About" className="mx-4 font-medium px-4 py-2 cursor-pointer text-2xl text-center">
            About
          </Link>
          <Link to="/Login" className="mx-4 font-medium bg-gray-300 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl text-center">
            Login
          </Link>
          <Link to="/SignUp" className="mx-4 font-medium bg-gray-300 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer text-2xl text-center">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
