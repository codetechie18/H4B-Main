import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; 
import About from "./Pages/About";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />  {/* ✅ Corrected Route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
