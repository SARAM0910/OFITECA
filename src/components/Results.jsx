import { FaProjectDiagram, FaCheckCircle, FaUsers } from "react-icons/fa";
import fondoResultados from "../assets/images/ResultsBg.png";

const Results = () => {
  return (
    <section
      className="relative w-full py-4 md:py-6 text-white mt-[-15px]"
      style={{
        backgroundImage: `url(${fondoResultados})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa de opacidad y filtro amarillo más suave */}
      <div className="absolute inset-0 bg-[#feb10860]"></div>

      {/* Contenedor principal */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0 pr-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Nuestro nivel de profesionalidad y compromiso
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-md text-justify">
            Constituyen una garantía para el cliente. El hecho de que nuestros mejores clientes cuenten siempre con nosotros como empresa de confianza es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Datos a la derecha con mayor separación */}
        <div className="mmd:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center items-center ">
          
          {/* Proyectos Realizados */}
          <div className="flex flex-col items-center">
            <FaProjectDiagram className="text-5xl text-white drop-shadow-lg" />
            <h3 className="text-4xl font-bold mt-2 drop-shadow-md">3534</h3>
            <p className="ttext-lg font-semibold uppercase min-h-[50px]">Proyectos Realizados</p>
          </div>

          {/* Proyectos Finalizados */}
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-5xl text-white drop-shadow-lg" />
            <h3 className="text-4xl font-bold mt-2 drop-shadow-md">896</h3>
            <p className="ttext-lg font-semibold uppercase min-h-[50px]">Proyectos Finalizados</p>
          </div>

          {/* Clientes Satisfechos */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-white drop-shadow-lg" />
            <h3 className="text-4xl font-bold mt-2 drop-shadow-md">172</h3>
            <p className="text-lg font-semibold uppercase min-h-[50px]">Clientes Satisfechos</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;
