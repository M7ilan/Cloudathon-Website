import React from "react";

export default function TeamCard({ Title, Description }) {
  return (
    <div>
      <div className="bg-slate-200 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-xl hover:bottom-3 transition-all duration-300">
        <p className="text-center font-bold text-2xl">{Title}</p>
        <p className="text-center text-2xl">{Description}</p>
      </div>
    </div>
  );
}
