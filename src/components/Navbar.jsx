import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/OfitecaLogo.png";
import { FaFacebookF, FaBars, FaTimes } from "react-icons/fa"; // Iconos

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-[#18A999] text-white px-8 py-4 fixed top-0 left-0 z-50 shadow-md h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Logo Ofiteca"
            className="h-32 w-auto cursor-pointer drop-shadow-lg ml-6"
            onClick={scrollToHome}
          />
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {[
            { name: "Inicio", href: "#home" },
            { name: "Proyectos", href: "#projects" },
            { name: "Servicios", href: "#services" },
            { name: "Contacto", href: "#contact" },
          ].map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={`hover:text-gray-200 transition pb-2 ${
                  activeSection === item.href ? "border-b-2 border-white" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Ícono de Facebook */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://www.facebook.com/share/1Xmn5V6wr7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-3xl hover:text-gray-200 transition mr-6"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Menú Móvil */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-[#033f63] text-center md:hidden text-xl font-semibold py-4">
          {[
            { name: "Inicio", href: "#home" },
            { name: "Proyectos", href: "#projects" },
            { name: "Servicios", href: "#services" },
            { name: "Contacto", href: "#contact" },
          ].map((item) => (
            <li key={item.name} className="py-2">
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
          <li className="py-2">
            <a
              href="https://www.facebook.com/share/1Xmn5V6wr7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white mt-2 text-3xl"
            >
              <FaFacebookF />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

