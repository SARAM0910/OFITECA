import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/images/equipo-trabajo.png";
import expansion from "../assets/images/expansion.png";
import misionVision from "../assets/images/mision-vision.png";
import historia from "../assets/images/historia.png";
import MiniNavbar from "../components/MiniNavbar"; // Importamos el nuevo componente


const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      window.scrollTo(0, 0); // Asegura que la página inicie en la parte superior
    }, []);
  
    const handleContactClick = () => {
      navigate("/home", { state: { scrollToContact: true } }); // Envia el estado para hacer scroll en Home
    };
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <>
    <MiniNavbar /> {/* Barra de navegación resumida */}

      {/* Encabezado con imagen de fondo */}
      <div
        className="relative h-[350px] w-full bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FEB10860] flex items-center justify-center w-full">
          <h1 className="text-6xl text-white font-extrabold text-center drop-shadow-lg">
            Sobre Nosotros
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="w-full py-20 px-12 text-gray-800 space-y-24 bg-[#FFE6A720]">
        {[{ title: "Nuestra Historia", text: "Desde nuestros inicios, en OFITECA nos enfocamos en ofrecer soluciones innovadoras en eficiencia energética, diferenciándonos por la calidad y flexibilidad de nuestro servicio.", image: historia },
          { title: "Nuestra Evolución", text: "A lo largo del tiempo, hemos ampliado nuestro alcance para incluir climatización, energías renovables, instalaciones eléctricas y más, consolidándonos como un referente del sector, nuestro departamento de arquitectura y construcción nos permite acometer con garantías proyectos de obra civil, tales como reformas de viviendas, construcción de salas de calderas, reformas de locales, etc.", image: expansion },
          { title: "Nuestra Misión y Visión", text: "Nuestra misión es transformar espacios a través de soluciones sostenibles e innovadoras. Nos proyectamos como líderes en eficiencia energética y tecnología aplicada al confort y bienestar.", image: misionVision },
        ].map((section, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } w-full`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Texto */}
            <div className="md:w-1/2 lg:w-5/12 text-center md:text-left border-l-8 border-[#FEB108] pl-6">
              <h2 className="text-5xl font-bold text-[#033F63]">{section.title}</h2>
              <p className="text-xl mt-4 leading-relaxed text-justify text-gray-700">{section.text}</p>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center">
              <div className="relative w-full max-w-[550px] border-4 border-[#FEB108] rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
                <img
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-[#18A99960] rounded-3xl"></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <div className="w-full text-center py-16 bg-[#4B4B4B] text-white">
        <h2 className="text-5xl font-bold">¿Quieres saber más?</h2>
        <p className="text-lg mt-2">Hablemos y descubre cómo podemos ayudarte.</p>
        <button
          onClick={handleContactClick}
          className="mt-6 bg-[#feb108] text-white px-10 py-4 rounded-xl shadow-lg text-xl font-bold transition duration-300 hover:bg-yellow-600"
        >
          Contáctanos
        </button>
      </div>
    </>
  );
};

export default About;










