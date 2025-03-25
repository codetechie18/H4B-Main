import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./Components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
     <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
