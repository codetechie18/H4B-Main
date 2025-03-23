import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home"; // Ensure you have this file
import About from "./Pages/About"; // Ensure you have this file
import Prize from "./Pages/Prize"; // Ensure you have this file



function App() {
    return (
        <Router>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Routes>
                    <Route path="/home" element={<Home />} />

                  <Route path="/prize" element={<Prize />} />
                   
                    <Route path="/about" element={<About />} />  {/* ✅ Corrected Route */}

                </Routes>
            </div>
        </Router>
    );
}

export default App;
