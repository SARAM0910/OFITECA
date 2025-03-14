import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"; 
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Primary from "./components/Warranty";
import About from "./components/About";

function HomePageWithScroll() {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, 500); // Se da un pequeño tiempo para asegurar que todo cargue
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <HomePage />
      <Primary />
      <Projects />
      <Services />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<HomePageWithScroll />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
