import React from "react";
import { Link } from "react-router-dom";

export default function ModelCard({ Title, Description, Price, Image, Page }) {
  return (
    <div>
      <div className="flex bg-slate-200 rounded-2xl h-[500px]">
        <img src={Image} className="rounded-l-2xl"></img>
        <div className="flex flex-col flex-1 m-12 justify-between">
          <p className="text-center font-bold text-2xl mb-12">{Title}</p>
          <p className="text-center text-2xl mb-12">{Description}</p>
          <Link to={Page} className="text-center text-2xl rounded-2xl p-8 bg-slate-300 cursor-pointer hover:shadow-lg transition-all duration-300 flex justify-between"><span className="font-bold">{Price}</span>Click to Visit</Link>
        </div>
      </div>
    </div>
  );
}
