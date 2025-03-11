import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          if (formSubmitted) {
            resetForm();
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [formSubmitted]);

  const resetForm = () => {
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    setSuccessMessage("");
    setErrors({});
    setFormSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      errors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Formato de correo inválido.";
    }
    if (!formData.asunto.trim()) errors.asunto = "El asunto es obligatorio.";
    if (!formData.mensaje.trim()) {
      errors.mensaje = "El mensaje es obligatorio.";
    } else if (formData.mensaje.length > 700) {
      errors.mensaje = "Máximo 700 caracteres.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("✅ Tu mensaje ha sido enviado correctamente.");
        setFormSubmitted(true);
        resetForm(); // Asegura que el formulario se limpia después del envío exitoso
      } else {
        setErrors({ general: "❌ Hubo un problema, intenta nuevamente." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "❌ Error al enviar el mensaje." });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#033F63] mb-4 mt-15 scroll-mt-20">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información de Contacto */}
          <div className="bg-white p-4 rounded-lg shadow-md text-sm">
            <h3 className="text-lg font-semibold text-[#033F63] mb-3">
              Nuestra Ubicación
            </h3>
            <iframe
              className="w-full h-44 rounded-md mb-3"
              src="https://maps.google.com/maps?q=Calle%20Alquife%20parcela%20144-18220%20Albolote%20Granada&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <h3 className="text-lg font-semibold text-[#033F63] mb-2">
              Información de Contacto
            </h3>
            <p className="flex items-center">
              <strong className="text-[#033F63] mr-2">Ofiteca</strong>
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-[#feb108] mr-2" />
              Calle Alquife parcela 144, 18220 Albolote, Granada
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-[#feb108] mr-2" />
              <a href="mailto:administracion@ofiteca.com" className="text-blue-600 hover:underline">
                administracion@ofiteca.com
              </a>
            </p>
            <p className="flex items-center">
              <FaPhone className="text-[#feb108] mr-2" />
              (+34) 958 99 92 35
            </p>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white p-4 rounded-lg shadow-md text-sm">
            <h3 className="text-lg font-semibold text-[#033F63] mb-3">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="nombre" placeholder="Nombre" className="w-full p-2 border rounded-md" value={formData.nombre} onChange={handleChange} />
              {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}

              <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-2 border rounded-md" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <input type="text" name="asunto" placeholder="Asunto" className="w-full p-2 border rounded-md" value={formData.asunto} onChange={handleChange} />
              {errors.asunto && <p className="text-red-500 text-xs">{errors.asunto}</p>}

              <textarea name="mensaje" placeholder="Tu mensaje" className="w-full p-2 border rounded-md resize-none" maxLength="700" rows="4" value={formData.mensaje} onChange={handleChange}></textarea>
              {errors.mensaje && <p className="text-red-500 text-xs">{errors.mensaje}</p>}

              <button type="submit" className="w-full bg-[#feb108] text-white py-2 rounded-md hover:bg-yellow-600 transition" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>

              {successMessage && <p className="text-green-500 text-xs mt-2">{successMessage}</p>}
              {errors.general && <p className="text-red-500 text-xs mt-2">{errors.general}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

