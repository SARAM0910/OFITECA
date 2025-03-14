import { useState } from "react";
import serviciosData from "../data/serviciosData"; // Archivo con info e imágenes
import { FaTimes } from "react-icons/fa";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Función para abrir el modal con la info del servicio seleccionado
  const handleOpenModal = (servicio) => {
    setSelectedService(servicio);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative w-full min-h-screen py-20 bg-[#4B4B4B20] scroll-mt-5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Nuestros Servicios
        </h2>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosData.map((servicio, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[270px]">
              <img src={servicio.imagen} loading="lazy" alt={servicio.titulo} className="w-full h-40 object-cover" />
              
              <div className="p-4 flex flex-col flex-grow">
                {/* Título ajustado más arriba */}
                <h3 className="text-xl font-semibold text-[#03s3F63] mb-2">{servicio.titulo}</h3>

               {/* Botón alineado al fondo de la card */}
                <div className="mt-auto">
                  <button
                    className="bg-[#feb108] text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition"
                    onClick={() => handleOpenModal(servicio)}
                  >
                    Más Info
                  </button>

                  <button
                    className=" ml-2 bg-[#feb108] text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition"
                    onClick={() => window.location.href = "#contact"}
                  >
                    Cotiza ya 
                  </button>
                  
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedService && (
        <div className="fixed inset-0 bg-[#4B4B4B80] flex justify-center items-center z-50">
          <div className="bg-white p-6 max-w-lg rounded-lg shadow-lg relative">
            {/* Botón de cierre con color ajustado */}
            <button
              className="absolute top-4 right-4 text-[#feb108] hover:text-yellow-600 transition"
              onClick={handleCloseModal}
            >
              <FaTimes size={24} />
            </button>

            <img src={selectedService.imagen} alt={selectedService.titulo} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-3xl font-bold text-gray-800 mt-4">{selectedService.titulo}</h3>
            <p className="text-gray-700 mt-2">{selectedService.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;