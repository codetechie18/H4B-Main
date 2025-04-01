import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Star, Zap, Briefcase } from 'lucide-react';

const Sponsors = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sponsor tiers with military ranks
  const sponsorTiers = [
    {
      tier: "General",
      icon: Shield,
      description: "Command-level sponsors providing elite support",
      color: "from-red-700 to-red-900",
      sponsors: [
        { name: "Alpha Defense Systems", logo: "/api/placeholder/200/100", website: "#" },
        { name: "Strategic Innovations Corp", logo: "/api/placeholder/200/100", website: "#" },
      ]
    },
    {
      tier: "Major",
      icon: Award,
      description: "Field-grade sponsors with exceptional contributions",
      color: "from-amber-600 to-amber-800",
      sponsors: [
        { name: "Tactical Technologies", logo: "/api/placeholder/180/90", website: "#" },
        { name: "Precision Engineering LLC", logo: "/api/placeholder/180/90", website: "#" },
        { name: "Forward Operations Group", logo: "/api/placeholder/180/90", website: "#" },
      ]
    },
    {
      tier: "Captain",
      icon: Star,
      description: "Company-level sponsors delivering significant support",
      color: "from-blue-600 to-blue-800",
      sponsors: [
        { name: "Echo Systems", logo: "/api/placeholder/150/75", website: "#" },
        { name: "Delta Dynamics", logo: "/api/placeholder/150/75", website: "#" },
        { name: "Sierra Software", logo: "/api/placeholder/150/75", website: "#" },
        { name: "Bravo Innovations", logo: "/api/placeholder/150/75", website: "#" },
      ]
    },
    {
      tier: "Lieutenant",
      icon: Zap,
      description: "Platoon-level sponsors providing valuable assistance",
      color: "from-green-600 to-green-800",
      sponsors: [
        { name: "Yankee Tech", logo: "/api/placeholder/120/60", website: "#" },
        { name: "X-Ray Solutions", logo: "/api/placeholder/120/60", website: "#" },
        { name: "Whiskey Web Development", logo: "/api/placeholder/120/60", website: "#" },
        { name: "Victor Ventures", logo: "/api/placeholder/120/60", website: "#" },
        { name: "Uniform United", logo: "/api/placeholder/120/60", website: "#" },
      ]
    },
    {
      tier: "Sergeant",
      icon: Briefcase,
      description: "Squad-level sponsors backing our mission",
      color: "from-gray-600 to-gray-800",
      sponsors: [
        { name: "Tango Training", logo: "/api/placeholder/100/50", website: "#" },
        { name: "Romeo Research", logo: "/api/placeholder/100/50", website: "#" },
        { name: "Papa Products", logo: "/api/placeholder/100/50", website: "#" },
        { name: "Oscar Outfitters", logo: "/api/placeholder/100/50", website: "#" },
        { name: "November Networks", logo: "/api/placeholder/100/50", website: "#" },
        { name: "Mike Media", logo: "/api/placeholder/100/50", website: "#" },
      ]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const tierVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sponsorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-12 px-6 pl-28 text-gray-100">
      {/* Hero section with military design */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 rounded-lg"></div>
        <div className="relative p-8 border-l-4 border-green-500 rounded-lg">
          <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mr-3"
            >
              <Shield className="w-10 h-10 text-green-500" />
            </motion.div>
            MISSION ALLIES
          </h1>
          <p className="text-xl max-w-3xl">
            Our hackathon success is backed by these organizations who have enlisted to support innovation and development in the field. We salute their commitment.
          </p>
          
          <motion.div 
            className="absolute top-3 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="px-4 py-2 bg-green-800/50 backdrop-blur-sm rounded border border-green-600 flex items-center">
              <Star className="w-5 h-5 mr-2 text-green-400" />
              <span>INTELLIGENCE REPORT: SPONSOR DIVISION</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated radar scan effect */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-[800px] h-[800px] rounded-full border-2 border-green-500"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </motion.div>

      {/* Sponsors content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10"
      >
        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div 
            key={tier.tier} 
            variants={tierVariants}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`p-3 rounded-full bg-gradient-to-br ${tier.color} mr-4 shadow-lg`}
              >
                <tier.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold tracking-wider">{tier.tier.toUpperCase()} TIER</h2>
                <p className="text-gray-400">{tier.description}</p>
              </div>
            </div>

            <div className={`
              grid gap-6 
              ${tier.tier === "General" ? "grid-cols-1 md:grid-cols-2" :
                tier.tier === "Major" ? "grid-cols-1 md:grid-cols-3" :
                "grid-cols-2 md:grid-cols-4"}
            `}>
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.website}
                  variants={sponsorVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  className={`
                    bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700
                    p-6 flex flex-col items-center justify-center
                    transition-all duration-300
                    hover:border-${tier.color.split(' ')[1]}
                    relative overflow-hidden
                  `}
                >
                  {/* Military style corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>

                  <img src={sponsor.logo} alt={sponsor.name} className="mb-4 object-contain" />
                  <h3 className="text-center font-mono text-sm tracking-wider">{sponsor.name}</h3>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      delay: tierIndex * 0.2 + sponsorIndex * 0.1,
                      repeatDelay: 5
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 p-8 border-2 border-dashed border-green-600 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">JOIN THE RANKS</h2>
              <p className="text-gray-300 max-w-xl">Become a sponsor and deploy your organization's support behind the next generation of innovation.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-700 hover:bg-green-600 rounded-md font-medium tracking-wider shadow-lg flex items-center"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              REQUEST BRIEFING
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors;