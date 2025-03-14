import React from "react";
import proyectoImg from "../assets/images/Proyecto.png";
import obraImg from "../assets/images/Obra.png";
import mantenimientoImg from "../assets/images/Mantenimiento.png";

const Primary = () => {
  return (
    <section className="w-full bg-transparent py-14 px-6">
      <div className="mx-auto text-center h-full mt-3">
        <h2 className="text-3xl font-bold text-[#033F63] mb-4">Nuestra Garantía</h2>

        {/* Contenedor de las 3 columnas */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* PROYECTO */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4 relative">
              {/* Círculo amarillo detrás */}
              <div className="absolute w-20 h-20 bg-[#feb10850] rounded-full left-0"></div>
              {/* Imagen alineada con el título */}
              <img src={proyectoImg} loading="lazy" alt="Proyecto" className="w-20 h-20 object-cover rounded-full relative z-10" />
              <h3 className="text-xl font-semibold text-gray-800 z-10">Proyecto</h3>
            </div>
            <p className="text-gray-700 text-justify">
              En OFITECA nos ajustamos a las necesidades y recursos de cada cliente, 
              realizando un análisis exhaustivo para proponer la solución técnica más eficiente.
            </p>
          </div>

          {/* OBRA E INSTALACIONES */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4 relative">
              {/* Círculo amarillo detrás */}
              <div className="absolute w-20 h-20 bg-[#feb10850] rounded-full left-0"></div>
              {/* Imagen alineada con el título */}
              <img src={obraImg} loading="lazy" alt="Obra e Instalaciones" className="w-20 h-20 object-cover rounded-full relative z-10" />
              <h3 className="text-xl font-semibold text-gray-800 z-10">Obra e Instalaciones</h3>
            </div>
            <p className="text-gray-700 text-justify">
              En OFITECA, ofrecemos soluciones llave en mano con trabajos de obra civil e instalaciones mecánicas, 
              térmicas y eléctricas, tanto en el sector residencial como industrial.
            </p>
          </div>

          {/* MANTENIMIENTO */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4 relative">
              {/* Círculo amarillo detrás */}
              <div className="absolute w-20 h-20 bg-[#feb10850] rounded-full left-0"></div>
              {/* Imagen alineada con el título */}
              <img src={mantenimientoImg} loading="lazy" alt="Mantenimiento" className="w-20 h-20 object-cover rounded-full relative z-10" />
              <h3 className="text-xl font-semibold text-gray-800 z-10">Mantenimiento</h3>
            </div>
            <p className="text-gray-700 text-justify">
              En OFITECA, nos encargamos de mantener tus instalaciones como el primer día, con un equipo altamente 
              experimentado que garantiza el mantenimiento eficiente de instalaciones residenciales e industriales.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Primary;



