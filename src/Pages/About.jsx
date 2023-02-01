import React from "react";
import TeamCard from "../Components/TeamCard";

function About() {
  return (
    <div>
      <div className="mx-64">
        <p className="text-center font-medium text-6xl mb-4">About us</p>
        <p className="text-center text-xl mb-24">
          We are a team of three dynamic individuals who came together to participate in a Hackathon challenge. Our leader, Oma Alenezy, brought us together with a vision to create a platform that would allow models to advertise themselves and be easily accessible to clients who are in need of their services. The idea for this platform was brought to the table by Faris Barika, while the stylish design was envisioned by Ghadeer Khormi.
          <br />
          <br />
          With a passion for innovation and a drive to make a difference, we have built this website to be the go-to destination for models and clients alike. Our focus is to provide a user-friendly platform that is easy to navigate and that streamlines the process of connecting models with potential clients.
          <br />
          <br />
          We are proud of what we have created and we are confident that this website will be a game-changer in the modeling industry. Our goal is to revolutionize the way models connect with clients and to make it easier for people to find the perfect model for their needs.
          <br />
          <br />
          We are grateful for the opportunity to participate in this Hackathon and we are looking forward to making a positive impact on the industry. If you have any questions or feedback, please do not hesitate to reach out to us. Thank you for visiting our website and we hope you enjoy using it as much as we enjoyed building it!
        </p>
        <p className="text-center font-medium text-6xl mb-4">Our Team</p>
        <div className="flex flex-col gap-8">
          <TeamCard Title="Faris Barika" Description="The creator of the website's concept." />
          <TeamCard Title="Omar Alenezy" Description="The leader and project manager of the team." />
          <TeamCard Title="Ghadeer Khormi" Description="The designer responsible for the website's aesthetic." />
        </div>
      </div>
    </div>
  );
}

export default About;
