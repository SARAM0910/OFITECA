import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/OfitecaLogo.png";
import videoMP4 from "../assets/videos/hero-background.mp4";


const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Reducir la velocidad del video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video de fondo cubriendo toda la pantalla */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 ml-0 mr-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://via.placeholder.com/1920x1080"
      >
        <source src={videoMP4} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      {/* Contenedor con fondo semitransparente para mejorar la legibilidad */}
      <div className="relative z-10 text-center mb-5 mt-5 h-auto px-6">
        <div className="bg-[#4B4B4B50] p-8 rounded-lg">
          {/* Logo más grande */}
          <img src={logo} loading="lazy" alt="Logo Ofiteca"className="mt-2 mx-auto w-96 md:w-96 drop-shadow-[4px_4px_10px_rgba(255,255,255,0.8)]" />

          {/* Texto central */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-0">
            Soluciones integrales en climatización, energías renovables y más.
          </h1>
          <p className="text-lg md:text-xl mt-4">
            En <span className="font-semibold text-white">OFITECA</span>, tenemos la experiencia y los recursos para llevar tu proyecto al siguiente nivel.
          </p>

          {/* Botón de acción */}
          <button
            onClick={() => navigate("/home")}
            className="mt-12 bg-[#18A999] hover:bg-[#18A99980] text-white font-semibold text-xl px-10 py-4 rounded-full shadow-lg transition duration-300"
          >
            Empezar
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


