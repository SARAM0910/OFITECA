import { useState, useEffect } from "react";
import benalmadena from "../assets/images/Benaldema.png";
import ikos from "../assets/images/Ikos.png";
import vitalia from "../assets/images/Vitalia.png";
import megaproyecto from "../assets/images/MegaProyecto.png";
import catalonia from "../assets/images/Catalonia.png";
import barcelo from "../assets/images/Barcelo.png";
import Results from "./Results"; // Importando Results

const projects = [
  { id: 1, img: benalmadena, title: "Benalmadena", desc: "Instalación de 40kw fotovoltaicos para consumo propio en residencia de ancianos." },
  { id: 2, img: ikos, title: "IKOS Andalucia", desc: "Instalación de conductos para climatización y ventilación en un macro hotel de 7 edificios rodeado de piscinas." },
  { id: 3, img: vitalia, title: "VITALIA", desc: "Instalación de climatización VRV, calefacción por biomasa y apoyo con gas natural." },
  { id: 4, img: megaproyecto, title: "Mega Proyecto", desc: "Instalaciones de climatización, contra incendios y fontanería." },
  { id: 5, img: catalonia, title: "Hotel Catalonia Santa Justa", desc: "Trabajos de climatización, gas natural y telecomunicaciones del hotel." },
  { id: 6, img: barcelo, title: "Hotel Barcelo V Centenario", desc: "Iluminación, climatización, producción y distribución de energía térmica." }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <>
      {/* Sección de proyectos con carrusel */}
      <section id="projects" className="w-full bg-white py-12 px-6 flex flex-col items-center relative scroll-mt-20 h-[90vh]">
        
        {/* Contenedor de título y botones alineados */}
        <div className="w-full max-w-5xl flex justify-between items-center mb-4">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#28666e]">Nuestra Experiencia</h2>

          {/* Botones alineados a la derecha */}
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/1Xmn5V6wr7/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#18A999] !text-white text-sm md:text-base font-semibold py-2 px-3 md:px-6 rounded-[8px] transition duration-300 hover:bg-[#117f76] hover:outline-1 hover:outline-[#18A999]"
            >
              Ver más proyectos
            </a>
            <a
              href="#contact"
              className="bg-[#feb108] !text-white text-sm md:text-base font-semibold py-2 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 hover:outline-1 hover:outline-[#18A999]"
            >
              Cotiza ya
            </a>
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative w-full max-w-3xl h-[60vh] md:h-[65vh] overflow-hidden">
          {/* Flechas de navegación */}
          <button
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 text-[#feb108] text-7xl md:text-6xl font-extrabold p-2 md:p-4 z-10 hover:text-[#feb108] bg-[#18A99970]"
            onClick={goToPrevious}
          >
            ❮
          </button>

          <button
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-[#feb108] text-7xl md:text-6xl font-extrabold p-2 md:p-4 z-10 hover:text-[#feb108] bg-[#18A99970]"
            onClick={goToNext}
          >
            ❯
          </button>

          {/* Contenedor de imágenes */}
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project) => (
              <div key={project.id} className="min-w-full flex flex-col items-center">
                <img src={project.img} alt={project.title} className="w-full h-[45vh] md:h-[50vh] object-cover rounded-lg shadow-lg" />
                <div className="text-center mt-3 px-4">
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 mt-1 max-w-lg text-sm md:text-base">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="flex space-x-2 mt-3">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition ${currentIndex === index ? "bg-[#28666e]" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Sección de resultados */}
      <Results />
    </>
  );
};

export default Projects;

