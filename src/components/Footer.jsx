import { FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4B4B4B] text-white py-6 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left mb-6">
          
          {/* Columna 1: Redes Sociales + Mensaje */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-semibold mb-2">Síguenos en redes</h3>
            <a href="https://www.facebook.com/share/1Xmn5V6wr7/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#feb108] transition">
              <FaFacebookF size={22} />
            </a>
            <p className="mt-3 text-xs text-gray-300 italic text-center md:text-left">
              "En OFITECA brindamos soluciones integrales en instalación y mantenimiento de edificios, con profesionalismo, experiencia y compromiso con el medio ambiente."
            </p>
          </div>

          {/* Columna 2: Contacto - Alineado a la derecha */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-base font-semibold mb-2">Contacto</h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-[#feb108] mr-2" />
              Calle Alquife parcela 144, Albolote, Granada
            </p>
            <p className="flex items-center mt-2">
              <FaEnvelope className="text-[#feb108] mr-2" />
              <a href="mailto:administracion@ofiteca.com" className="hover:underline">
                administracion@ofiteca.com
              </a>
            </p>
            <p className="flex items-center mt-2">
              <FaPhone className="text-[#feb108] mr-2" />
              (+34) 958 99 92 35
            </p>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-400 pt-4">
          
          {/* Enlaces de Navegación */}
          <nav className="flex justify-center gap-6 text-xs mb-4">
            <a href="#home" className="hover:text-[#feb108] transition">Inicio</a>
            <a onClick={"/about"} className="hover:text-[#feb108] transition">Sobre Nosotros</a>
            <a href="#services" className="hover:text-[#feb108] transition">Servicios</a>
            <a href="#contact" className="hover:text-[#feb108] transition">Contacto</a>
          </nav>

          {/* Créditos */}
          <div className="text-center text-xs">
            <p>© 2025 Ofiteca. Todos los derechos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;





  