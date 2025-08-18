import React, { useState } from 'react';
import ManinNav from './Components/MainNav';

// Import your page components
import Hero from './Pages/Hero';
import Gallery from "./Pages/Gallery";
import Partners from "./Pages/Partners";
import Humans from './Pages/Humans';
import Faqs from './Pages/Faqs';
import Tracks from './Pages/Tracks';
import Digitalswag from './Pages/Digitalswag';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // This function will be passed to Sidebar to notify App of expansion state
  const handleSidebarExpand = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <div className="flex bg-black min-h-screen">
      <ManinNav onExpandChange={handleSidebarExpand} />
      <main 
        className={`
          transition-all duration-300 
          ${sidebarExpanded ? 'ml-46' : 'ml-0'} 
          w-full relative overflow-x-hidden
        `}
      >
        {/* Content wrapper */}
        <div className="relative z-10 w-full min-h-screen">
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="min-h-screen">
            <Gallery />
          </section>

          {/* Digital Swag Section */}
          <section id="digital-swag" className="min-h-screen">
            <Digitalswag />
          </section>

          {/* Partners Section */}
          <section id="partners" className="min-h-screen">
            <Partners />
          </section>

          {/* Humans Section */}
          <section id="humans" className="min-h-screen">
            <Humans />
          </section>

          {/* Tracks Section */}
          <section id="tracks" className="min-h-screen">
            <Tracks />
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="min-h-screen">
            <Faqs />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;