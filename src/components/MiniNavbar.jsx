// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { FaFacebookF, FaHome } from "react-icons/fa";
// import logo from "../assets/images/OfitecaLogo.png"; // Asegúrate de que la ruta es correcta

// const MiniNavbar = () => {
//   const navigate = useNavigate();
//   const [isVisible, setIsVisible] = useState(false);

//   // Manejar la visibilidad cuando se hace scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#18A999] text-white px-8 py-4 flex justify-between h-20 items-center shadow-md z-50">
//       {/* Logo */}
//       <img
//         src={logo}
//         alt="Logo"
//         className="h-32 w-auto cursor-pointer drop-shadow-lg ml-6"
//         onClick={() => navigate("/home")}
//       />

//       {/* Botón para volver al inicio */}
//       <a
//        onClick={() => navigate("/home")}
//        className={`flex items-center text-white font-semibold text-lg relative transition-all duration-300 ${
//          location.pathname === "/home" ? "border-b-4 border-[#FEB108]" : ""
//        }`}
//       >
//         <FaHome className="mr-2" /> Volver al inicio
//       </a>

//       {/* Icono de Facebook */}
//       <a
//         href="https://facebook.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block text-white mt-2 text-3xl"
//       >
//         <FaFacebookF />
//       </a>
//     </nav>
//   );
// };

// export default MiniNavbar;

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFacebookF, FaHome } from "react-icons/fa";
import logo from "../assets/images/OfitecaLogo.png"; // Asegúrate de que la ruta es correcta

const MiniNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Manejar la visibilidad cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para navegar a "/home" y asegurarse de que inicie en la parte superior
  const goToHome = () => {
    navigate("/home");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#18A999] text-white px-8 py-4 flex justify-between h-20 items-center shadow-md z-50">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="h-32 w-auto cursor-pointer drop-shadow-lg ml-6"
        onClick={goToHome}
      />

      {/* Botón para volver al inicio */}
      <a
        onClick={goToHome}
        className={`flex items-center text-white font-semibold text-lg relative transition-all duration-300 ${
          location.pathname === "/home" ? "border-b-2 border-white" : ""
        }`}
      >
        <FaHome className="mr-2" /> Volver al inicio
      </a>

      {/* Icono de Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white mt-2 text-3xl"
      >
        <FaFacebookF />
      </a>
    </nav>
  );
};

export default MiniNavbar;
