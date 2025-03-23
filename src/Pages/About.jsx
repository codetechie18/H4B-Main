import React from "react";
import BgDots from "../Components/particles/BgDots";
import soldier from "../assets/soldier.png";

// ✅ Background Image (Using Vite's import.meta.url)
const bgImage = new URL("../assets/bg-2.jpg", import.meta.url).href;

const About = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Fullscreen Particles */}
      <div className="absolute inset-0 z-10">
        <BgDots />
      </div>

      {/* Centered Heading */}
      <div className="relative z-20 w-full text-center mt-10">
        
        <h1 className="relative inline-block text-3xl md:text-4xl font-bold text-green-900 px-5 py-2 rounded-md overflow-hidden">
          Recon Mission 
          {/*Animated Border */}
          <span
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "2px solid white",
              borderRadius: "5px",
              boxSizing: "border-box",
              animation: "border-rotate 5s linear infinite",
            }}
          />
        </h1>
      </div>

      {/* ✅ CSS for Rotating Border */}
      <style>
        {`
    @keyframes border-rotate {
      0% {
        clip-path: inset(0 0 98% 0);
      }
      25% {
        clip-path: inset(0 98% 0 0);
      }
      50% {
        clip-path: inset(98% 0 0 0);
      }
      75% {
        clip-path: inset(0 0 0 98%);
      }
      100% {
        clip-path: inset(0 0 98% 0);
      }
    }
  `}
      </style>

      <div className="flex items-center justify-between w-11/12 md:w-4/5 mt-12">
        {/* Image on Left Side */}
        <img
          src={soldier}
          alt="Hackathon Soldier"
          className="w-full max-w-[350px] object-contain drop-shadow-md"
        />

        {/*  Paragraph on Right Side */}
        <div className="relative bg-black bg-opacity-50 p-5 rounded-lg w-1/2 min-h-[150px] text-center overflow-hidden">
          {/* Animated Border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid transparent",
              borderRadius: "5px",
              animation: "border-rotate 8s linear infinite",
            }}
          />

          <p className="text-white text-base leading-relaxed relative z-10">
            A hackathon is an event where programmers, designers, and developers
            come together to collaborate on software projects within a limited
            timeframe. Participants work in teams to build innovative solutions,
            solve real-world problems, and showcase their technical skills.
            Hackathons encourage creativity, teamwork, and problem-solving,
            making them a great platform for learning and networking.
          </p>
        </div>

        {/* CSS for Animated Border */}
        <style>
          {`
    @keyframes border-rotate {
      0% {
        border-image: linear-gradient(0deg, white, transparent) 1;
      }
      25% {
        border-image: linear-gradient(90deg, white, transparent) 1;
      }
      50% {
        border-image: linear-gradient(180deg, white, transparent) 1;
      }
      75% {
        border-image: linear-gradient(270deg, white, transparent) 1;
      }
      100% {
        border-image: linear-gradient(360deg, white, transparent) 1;
      }
    }
  `}
        </style>
      </div>
    </div>
  );
};

export default About;
