import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrizePage = () => {
  const [hoveredPrize, setHoveredPrize] = useState(null);
  const [activeTab, setActiveTab] = useState('prizes');

  const prizes = [
    {
      title: "Commander's Choice",
      rank: "1st Place",
      description: "For the most innovative and impactful solution.",
      rewards: ["$5,000 Cash Prize", "Professional Mentorship", "Recruitment Opportunities"],
      icon: "🎖️",
    },
    {
      title: "Lieutenant's Award",
      rank: "2nd Place",
      description: "For exceptional technical execution and problem-solving.",
      rewards: ["$2,500 Cash Prize", "Cloud Credits", "Industry Recognition"],
      icon: "⭐",
    },
    {
      title: "Sergeant's Recognition",
      rank: "3rd Place",
      description: "For outstanding teamwork and presentation skills.",
      rewards: ["$1,000 Cash Prize", "Hardware Kits", "Community Spotlight"],
      icon: "🏅",
    },
    {
      title: "Special Operations",
      rank: "Special Category",
      description: "For the most creative use of emerging technologies.",
      rewards: ["$750 Cash Prize", "Tech Gadgets", "Conference Tickets"],
      icon: "🔍",
    },
  ];

  const specialMentions = [
    {
      title: "Rookie Recruit",
      description: "For the most promising first-time hackathon participants.",
      reward: "Developer Toolkit & Mentorship Sessions",
    },
    {
      title: "Code Commando",
      description: "For the most elegant and efficient code implementation.",
      reward: "Premium IDE Licenses & Online Course Access",
    },
    {
      title: "Digital Tactician",
      description: "For the best user experience and interface design.",
      reward: "Design Software Subscription & Portfolio Showcase",
    },
  ];

  // Animated background pattern - simulates radar scan
  const RadarScan = () => (
    <motion.div 
      className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none"
      style={{ 
        background: 'radial-gradient(circle, transparent 20%, transparent 70%, rgba(52, 211, 153, 0.2) 71%, rgba(52, 211, 153, 0) 100%)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div className="bg-gray-900 text-gray-200 w-full h-screen relative overflow-y-auto">
      {/* Animated background element */}
      <div className="">
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-3xl"
          animate={{
            x: [100, -30, 100],
            y: [100, 200, 100],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            x: [-100, 30, -100],
            y: [30, -30, 30],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cover bg-center" 
           style={{backgroundImage: "url('/api/placeholder/1200/400')"}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <RadarScan />
        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 mb-9">
          <motion.h1 
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-6xl font-bold text-center text-green-400 tracking-wide uppercase"
          >
            <motion.span
              animate={{ textShadow: ["0 0 5px rgba(52, 211, 153, 0)", "0 0 20px rgba(52, 211, 153, 0.7)", "0 0 5px rgba(52, 211, 153, 0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              MISSION REWARDS
            </motion.span>
          </motion.h1>
         
         
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center border-b border-gray-700 mb-8">
          <motion.button
            className={`px-6 py-3 text-lg font-semibold relative ${activeTab === 'prizes' ? 'text-green-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('prizes')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Primary Objectives
            {activeTab === 'prizes' && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-green-500"
                layoutId="activeTab"
              />
            )}
          </motion.button>
          <motion.button
            className={`px-6 py-3 text-lg font-semibold relative ${activeTab === 'special' ? 'text-green-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('special')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Special Reconnaissance
            {activeTab === 'special' && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-green-500"
                layoutId="activeTab"
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Content Sections with Tab Animation */}
      <AnimatePresence mode="wait">
        {activeTab === 'prizes' && (
          <motion.div
            key="prizes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto px-4 pb-16"
          >
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl font-bold mb-2 text-green-400 uppercase tracking-wider">Primary Objectives</h2>
              <p className="text-lg text-gray-400 max-w-2xl text-center">
                Elite rewards await those who demonstrate exceptional skill, strategy, and execution in the field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 border-2 border-green-800 rounded-lg overflow-hidden relative"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(52, 211, 153, 0.3)",
                    borderColor: "rgb(52, 211, 153)"
                  }}
                  onHoverStart={() => setHoveredPrize(index)}
                  onHoverEnd={() => setHoveredPrize(null)}
                >
                  <div className="bg-gray-700 p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-green-400">{prize.title}</h3>
                    <motion.span 
                      className="text-3xl"
                      animate={hoveredPrize === index ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0, -10, 0]
                      } : {}}
                      transition={{ duration: 0.7 }}
                    >
                      {prize.icon}
                    </motion.span>
                  </div>
                  <div className="p-6">
                    <motion.div 
                      className="inline-block px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-semibold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {prize.rank}
                    </motion.div>
                    <p className="text-gray-300 mb-4">{prize.description}</p>
                    <ul className="space-y-2">
                      {prize.rewards.map((reward, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                        >
                          <motion.svg 
                            className="w-4 h-4 mr-2 text-green-500" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            animate={hoveredPrize === index ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ delay: idx * 0.15 }}
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </motion.svg>
                          {reward}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {hoveredPrize === index && (
                    <motion.div 
                      className="absolute inset-0 border-2 border-green-400 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'special' && (
          <motion.div
            key="special"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto px-4 pb-16"
          >
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-green-400 uppercase tracking-wider">Special Reconnaissance</h2>
              <p className="text-lg text-gray-400 max-w-2xl text-center">
                Additional commendations for specialized skills and tactical excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialMentions.map((mention, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-gray-700 border border-green-700 rounded-md p-6 relative overflow-hidden"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(52, 211, 153, 0.2)"
                  }}
                >
                  {/* Animated decorative element */}
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-green-800 rounded-full opacity-10"
                    style={{ top: '-10px', right: '-10px' }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <motion.h3 
                    className="text-xl font-bold text-green-400 mb-3 relative z-10"
                    whileHover={{ scale: 1.02, x: 2 }}
                  >
                    {mention.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-4 relative z-10">{mention.description}</p>
                  <motion.div 
                    className="pt-4 border-t border-gray-600 relative z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    style={{ originX: 0 }}
                  >
                    <motion.p 
                      className="text-green-300 font-medium"
                      whileHover={{ textShadow: "0 0 8px rgba(52, 211, 153, 0.5)" }}
                    >
                      REWARD: {mention.reward}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Decoration Elements */}
      <motion.div 
        className="fixed top-1/4 right-10 w-2 h-2 bg-green-400 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 left-10 w-3 h-3 bg-green-500 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [1, 0.3, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default PrizePage;