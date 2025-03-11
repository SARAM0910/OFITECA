require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;
const destinatario = "nayade.perez.p@gmail.com"; // Temporal para pruebas

// Cargar variables manualmente si no se cargan automáticamente
const EMAIL_USER = process.env.EMAIL_USER || "nayade.perez.p@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "qhkneubybwsnyoql";

// Middleware
app.use(express.json());
app.use(cors());

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verificar si las variables se están cargando correctamente
console.log("[INFO] Email User:", EMAIL_USER);
console.log("[INFO] Email Pass:", EMAIL_PASS ? "Cargado" : "No cargado");

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    // Enviar correo a la empresa (mensaje recibido)
    await transporter.sendMail({
      from: `"${nombre}" <${EMAIL_USER}>`, 
      to: EMAIL_USER, 
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    // Correo de respuesta automática al usuario con HTML
    await transporter.sendMail({
      from: `"Ofiteca" <${EMAIL_USER}>`,
      to: email,
      subject: "📩 ¡Gracias por tu contacto con Ofiteca!",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gracias por contactarnos</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #18A999; padding: 20px; text-align: center;">
            <div style="background-color: white; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                
                <!-- Logo más grande -->
                <img src="https://drive.google.com/uc?export=view&id=1Yx3BxFwlyKo9rKeQGCeMqdQCM_viuww8" 
                     alt="Ofiteca" 
                     style="max-width: 200px; margin-top: 20px;">
                
                <h2 style="color: #033F63;">¡Gracias por contactarnos, ${nombre}!</h2>
                
                <p style="color: #555; font-size: 16px;">
                    Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo lo antes posible.  
                </p>
    
                <p style="color: #555; font-size: 16px;">
                    Si necesitas más información, no dudes en escribirnos o llamarnos.
                </p>
    
                <hr style="border: none; border-top: 1px solid #033F63; margin: 20px 0;">
    
                <p style="color: #555; font-size: 14px;">
                    <strong>📞 Atención al Cliente:</strong> (+34) 958 99 92 35 <br>
                    <strong>✉️ Email:</strong> <a href="mailto:administracion@ofiteca.com" style="color: #033F63;">administracion@ofiteca.com</a>
                </p>
    
                <p style="color: #555; font-size: 14px; margin-bottom: 20px;">
                    📍 <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00 (hora España)
                </p>
    
            </div>
        </body>
        </html>
      `,
    });
    

    res.json({ success: true, message: "Correos enviados correctamente." });
  } catch (error) {
    console.error("[ERROR] Error al enviar correos:", error);
    res.status(500).json({ error: "Error al enviar los correos." });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`[INFO] Servidor corriendo en http://localhost:${PORT}`);
});
