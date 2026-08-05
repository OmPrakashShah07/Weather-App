import "./pages/portfolio.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-decor" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Weather App · Powered by{" "}
          <a href="https://openweathermap.org" target="_blank" rel="noreferrer">
            OpenWeatherMap
          </a>
        </p>
      </footer>
    </Router>
  );
}

export default App
