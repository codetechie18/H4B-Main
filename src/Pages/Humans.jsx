import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HumansPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Captain Alex Johnson",
      role: "Lead Organizer",
      description: "Veteran hackathon organizer with 7+ years of experience leading tech events.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Lieutenant Sam Rivera",
      role: "Technical Lead",
      description: "Full-stack developer specialized in infrastructure and deployment architectures.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Sergeant Maya Chen",
      role: "Design Specialist",
      description: "UI/UX expert with a background in designing mission-critical interfaces.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "Corporal Devon Smith",
      role: "Logistics Coordinator",
      description: "Operations expert ensuring all supplies and resources are mission-ready.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 5,
      name: "Specialist Taylor Morgan",
      role: "Mentorship Lead",
      description: "Connecting participants with industry veterans for tactical guidance.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 6,
      name: "Private First Class Jordan Lee",
      role: "Community Relations",
      description: "Building alliances with tech communities and sponsorship partners.",
      image: "/api/placeholder/150/150"
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const teamMemberVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-olive-900 text-gray-100 pt-20 pb-16">
      {/* Hero section with radar animation */}
      <div className="relative overflow-hidden bg-olive-800 h-64 mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full border-4 border-green-500 opacity-20"></div>
          <div className="absolute w-80 h-80 rounded-full border-4 border-green-500 opacity-30 animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute w-64 h-64 rounded-full border-4 border-green-500 opacity-40 animate-ping" style={{ animationDuration: '6s' }}></div>
          <div className="absolute w-80 h-4 bg-green-500 opacity-70 animate-spin" style={{ animationDuration: '8s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-military uppercase tracking-wider text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-green-400">Troops</span> On Duty
          </motion.h1>
          <motion.p 
            className="text-lg text-center mt-2 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Meet the elite squad organizing Operation: Code Breakthrough
          </motion.p>
        </div>
      </div>

      {/* Team members section */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="bg-olive-800 border-2 border-olive-700 p-6 rounded-lg flex flex-col items-center hover:border-green-400 transition-all duration-300"
              variants={teamMemberVariants}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-olive-600 mb-4 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-military text-green-400">{member.name}</h3>
                <div className="inline-block px-3 py-1 bg-olive-700 text-sm rounded-full mb-2">{member.role}</div>
                <p className="text-gray-300">{member.description}</p>
              </div>
              
              <motion.div 
                className="mt-4 w-full h-1 bg-olive-700"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="h-full bg-green-500 w-4/5"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Join the team CTA */}
      <motion.div 
        className="container mx-auto px-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="bg-olive-800 border-2 border-dashed border-olive-600 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-military text-center text-green-400 mb-4">Join The Operation</h2>
          <p className="text-center mb-6">Looking for volunteers to help run our hackathon. If you have what it takes to join this elite squad, fill out the recruitment form below.</p>
          
          <button className="block mx-auto bg-green-600 hover:bg-green-500 text-white font-military py-3 px-8 rounded uppercase tracking-wider transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10">Enlist Now</span>
            <span className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>
        </div>
      </motion.div>

      {/* Mission stats */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Events Completed", value: "14" },
            { label: "Team Members", value: "26" },
            { label: "Success Rate", value: "100%" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-olive-800 border border-olive-700 p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + (index * 0.2), duration: 0.6 }}
            >
              <div className="text-4xl font-military text-green-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HumansPage;