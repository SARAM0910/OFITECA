import React, { useState, useEffect } from "react";
import img1 from "../assets/images/Incendios.png";
import img2 from "../assets/images/EneRenov.png";
import img3 from "../assets/images/Aguas.png";
import img4 from "../assets/images/Ventilacion.png";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3, img4];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 2 segundos automáticamente
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Se ejecuta cada vez que cambia la imagen

  return (
    <section id="home" className="w-full pt-24 bg-white relative">
      {/* Contenedor del banner */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Solución"
          className="w-full h-96 object-cover transition-all duration-500"
        />

        {/* Texto sobre el banner */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#feb10860] text-white text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-[4px_4px_6px_black]">
            Soluciones Integrales
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-[3px_3px_5px_black]">
            Climatización y Energías Renovables • Tratamiento de Aguas <br />
            Sistemas Contra Incendios • Instalaciones Eléctricas y Fontanería
          </p>
          <div className="mt-6 flex gap-4">
          <button
              className="px-6 py-3 bg-[#18A999] text-white text-lg font-semibold rounded-lg hover:bg-[#117f76] transition duration-300"
              onClick={() => navigate("/about")}
            >
              Sobre Nosotros
            </button>
            <button
              className="px-6 py-3 bg-[#feb108] text-white text-lg font-semibold rounded-lg  hover:bg-yellow-600 transition duration-300"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contáctanos
            </button>
            <button
              className="px-6 py-3 bg-[#18A999] text-white text-lg font-semibold rounded-lg hover:bg-[#117f76] transition duration-300"
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              Ver Proyectos
            </button>
          </div>
        </div>

        {/* Indicadores (puntos) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                ${currentIndex === index ? "bg-white scale-125 shadow-md" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
