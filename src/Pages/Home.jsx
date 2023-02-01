import React from "react";
import ModelCard from "../Components/ModelCard";
import { Model1, Model2, Model3, Model4, Model5, Model6, Model7 } from "../images/models";

function Home() {
  return (
    <div>
      <div className="grid m-12 2xl:grid-cols-2 grid-cols-1 gap-16">
        <ModelCard Title="Liam Thompson" Description="Elegant and experienced model with a keen eye for fashion and a passion for the runway." Price="SAR 100" Image={Model5} Page="Liam_Thompson" />
        <ModelCard Title="Ethan Davis" Description="Highly experienced male model with chiseled features and a winning smile. Available for photoshoots, fashion shows, and commercial work." Price="SAR 150" Image={Model1} Page="Ethan_Davis"/>
      </div>
    </div>
  );
}

export default Home;
