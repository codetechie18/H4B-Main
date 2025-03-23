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
        <h1
          className="text-3xl md:text-4xl font-bold text-green-900"
          style={{
            position: "relative",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
          marginTop: "50px",
        }}
      >
        {/*   Image on Left Side */}
        <img
          src={soldier}
          alt="Hackathon Soldier"
          style={{
            width: "100%",
            maxWidth: "350px",
            objectFit: "contain",
            filter: "drop-shadow(4px 4px 10px rgba(0,0,0,0.3))",
          }}
        />

        {/*  Paragraph on Right Side */}
        <div
          className="hackathon-info"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            fontFamily: "Arial, sans-serif",
            width: "50%",
            textAlign: "center",
            minHeight: "150px",
            position: "relative",
            overflow: "hidden",
          }}
        >
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

          <p
            style={{
              color: "white",
              fontSize: "16px",
              lineHeight: "1.8",
              margin: "0",
              position: "relative",
              zIndex: 1,
            }}
          >
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
