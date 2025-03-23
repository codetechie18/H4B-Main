import React, { useState, useEffect, useRef } from "react";
import BgDots from "../Components/particles/BgDots";
import soldier from "../assets/soldier.png";
import { TrendingUp, Users, Briefcase, Trophy } from "lucide-react";


const StatCard = ({ icon: Icon, value, label, delay, isVisible }) => (
  <div
    className={`relative overflow-hidden p-4 sm:p-6 transform 
      hover:scale-105 transition-all duration-500 ease-out 
      hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] border-x-green-800
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    style={{
      transition: `transform 0.5s ease-out, opacity 0.5s ease-out, translate 0.5s ease-out, box-shadow 0.3s ease-out`,
      transitionDelay: `${delay}ms`,
    }}
  >
    <div className="absolute w-full h-full transform translate-x-8 -translate-y-8" />
    <div className="flex flex-col  items-center space-y-3">
      <div className="relative">
        <div className="absolute inset-0 bg-orange-100 rounded-full blur-md opacity-20 animate-pulse" />
        <div className="relative bg-gradient-to-br from-green-800 to-green-800 p-3 rounded-full">
          <Icon className="w-8 h-8 text-yellow-300" />
        </div>
      </div>
      <p className="text-3xl font-bold text-white">
        {label.includes("Prize") && "₹"}
        {value.toLocaleString()}
        {label.includes("") ? "+" : ""}
      </p>
      <p
        className="text-orange-800 font-medium text-center text-xl"
        style={{ fontFamily: "Pirata One, cursive" }}
      >
        {label}
      </p>
    </div>
  </div>
);

// ✅ Background Image (Using Vite's import.meta.url)
const bgImage = new URL("../assets/bg-2.jpg", import.meta.url).href;





const About = () => {
  const [animatedStats, setAnimatedStats] = useState({
    prizes: 0,
    registration: 0,
    hackers: 0,
    projects: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animation
  const observerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnect observer once the section is visible
          }
        });
      },
      { rootMargin: "-200px" }
    );

    observerRef.current = observer;
    observer.observe(document.querySelector("#stats-section"));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  
  // Stats animation effect

  useEffect(() => {
    const startDelay = 1200;
    const animationDuration = 2800;
    const steps = 80;
    const interval = animationDuration / steps;

    const targetStats = {
      prizes: 500000,
      registration: 4000,
      hackers: 250,
      projects: 100,
    };

    const incrementValues = {
      prizes: targetStats.prizes / steps,
      registration: targetStats.registration / steps,
      hackers: targetStats.hackers / steps,
      projects: targetStats.projects / steps,
    };

    let currentStep = 0;

    const startAnimation = () => {
      const timer = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targetStats);
          return;
        }

        setAnimatedStats((prev) => ({
          prizes: Math.min(
            Math.round(prev.prizes + incrementValues.prizes),
            targetStats.prizes
          ),
          registration: Math.min(
            Math.round(prev.registration + incrementValues.registration),
            targetStats.registration
          ),
          hackers: Math.min(
            Math.round(prev.hackers + incrementValues.hackers),
            targetStats.hackers
          ),
          projects: Math.min(
            Math.round(prev.projects + incrementValues.projects),
            targetStats.projects
          ),
        }));

        currentStep++;
      }, interval);
    };

    const timeout = setTimeout(startAnimation, startDelay);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center overflow-y-auto"
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
      

      {/* Stats Section */}
      <div
          id="stats-section"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5 w-full pt-12"
        >
          <StatCard
            icon={Trophy}
            value={animatedStats.prizes}
            label="Prize Pool"
            delay={0}
            isVisible={isVisible}
          />
          <StatCard
            icon={TrendingUp}
            value={animatedStats.registration}
            label="Registration"
            delay={200}
            isVisible={isVisible}
          />
          <StatCard
            icon={Users}
            value={animatedStats.hackers}
            label="Hackers"
            delay={400}
            isVisible={isVisible}
          />
          <StatCard
            icon={Briefcase}
            value={animatedStats.projects}
            label="Projects"
            delay={600}
            isVisible={isVisible}
          />
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

      <div className="flex items-center justify-between w-11/12 md:w-4/5 mt-12 ">
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
