// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Home, Image, Users, Calendar, Trophy, Info, Phone, Handshake } from "lucide-react";
// import About from "./Pages/About";
// import Hero from "./Pages/Hero";
// import Whyh4b from "./Pages/Whyh4b";

// const Sidebar = () => {
//   const [active, setActive] = useState("Home");

//   const menuItems = [
//     { name: "Home", icon: <Home size={20} />, path: "/" },
//     { name: "Features", icon: <Image size={20} />, path: "/features" },
//     { name: "Hero", icon: <Handshake size={20} />, path: "/hero" },
//     { name: "Why H4B", icon: <Trophy size={20} />, path: "/whyh4b" },
//     { name: "About", icon: <Calendar size={20} />, path: "/about" },
//     { name: "Contact", icon: <Phone size={20} />, path: "/contact" },
//   ];

//   return (
//     <div className="h-screen w-56 bg-gradient-to-b from-black to-red-700 p-4 rounded-lg flex flex-col">
//       {menuItems.map((item) => (
//         <Link
//           to={item.path}
//           key={item.name}
//           className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-300 transition-all duration-300 hover:text-white hover:bg-red-600 ${
//             active === item.name ? "bg-black text-white" : ""
//           }`}
//           onClick={() => setActive(item.name)}
//         >
//           {item.icon}
//           <span className="text-lg">{item.name}</span>
//         </Link>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6">
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/hero" element={<Hero />} />
//             <Route path="/whyh4b" element={<Whyh4b />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Hero';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Features from './Pages/Features';
// import MainNav from './Components/MainNav';

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <MainNav />
//         <main className="ml-20 hover:ml-64 transition-all duration-300 flex-grow p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/features" element={<Features />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;








import React from "react";
import Hero from "./Pages/Hero";
import { Contact } from "lucide-react";

const App = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default App;
