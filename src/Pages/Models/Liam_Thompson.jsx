import React from "react";
import ModelCard from "../../Components/ModelCard";
import { Model1, Model2, Model3, Model4, Model5, Model6, Model7 } from "../../images/models";

export default function Liam_Thompson() {
  return (
    <div>
      <div className="mx-48">
        <div className="text-[64px] font-bold text-center mb-16">Liam Thompson</div>
        <div className="flex mb-[128px]">
          <img src={Model5} className="mr-16 h-[640px] rounded-2xl" />
          <p className="text-[24px]">
            As a model, I am proud to have made a name for myself in the fashion industry. My passion for modeling and my dedication to my craft have allowed me to showcase my unique look and captivating presence on the runway. I am known for my stunning features and svelte figure, and I am always striving to bring my best to each and every shoot and show. My goal is to continue to inspire others and make an impact in the world of fashion.
            <br />
            <br />
            In addition to modeling, I am also committed to using my platform to advocate for important causes. I believe that it is important to use my influence to bring attention to issues that matter, and to be a positive role model for others. I actively support organizations that work towards promoting equality, inclusivity, and sustainability in the fashion industry and beyond. I hope to inspire others to use their own voices and platforms to make a difference in the world, and to leave a lasting impact for future generations.
          </p>
        </div>
        <a className="text-[32px] font-medium text-center mb-16 flex justify-center bg-slate-200 hover:shadow-xl transition-all duration-200 cursor-pointer rounded-xl py-4">SAR 100 - Reservation</a>
      </div>
    </div>
  );
}
