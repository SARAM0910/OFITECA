<?php

namespace Ofiteca\Api;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config/config.php';

class Mailer {
    public function sendEmail($nombre, $email, $asunto, $mensaje) {
        $mail = new PHPMailer(true);

        try {
            // Configurar SMTP
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USER;
            $mail->Password = SMTP_PASS;
            $mail->SMTPSecure = SMTP_SECURE;
            $mail->Port = SMTP_PORT;

            // 📩 Enviar correo a la empresa (mensaje recibido)
            $mail->setFrom(SMTP_USER, $nombre);
            $mail->addAddress(SMTP_USER); // Se envía a sí mismo (empresa)
            $mail->addReplyTo($email);

            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = "📩 Nuevo mensaje de contacto: $asunto"; // Emoji en el asunto
            $mail->Body = "
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> $nombre</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Mensaje:</strong></p>
                <p>$mensaje</p>
            ";
            $mail->send();

            // 📩 Correo de respuesta automática al usuario con "Ofiteca" como remitente
            $mail->clearAddresses();
            $mail->addAddress($email); // Ahora al usuario
            $mail->setFrom(SMTP_USER, "Ofiteca");
            $mail->Subject = "📩¡Gracias por tu contacto con Ofiteca!"; 
            $mail->Body = "
                <!DOCTYPE html>
                <html lang='es'>
                <head>
                    <meta charset='UTF-8'>
                    <title>Gracias por contactarnos</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #18A999; }
                        .container { text-align: center; padding: 20px; }
                        .email-box { background-color: white; max-width: 600px; margin: auto; padding: 20px; 
                                     border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                        .logo { max-width: 200px; margin-top: 20px; }
                        .divider { border: none; border-top: 1px solid #033F63; margin: 20px 0; }
                        .footer { color: #555; font-size: 14px; }
                        .footer a { color: #033F63; text-decoration: none; }
                    </style>
                </head>
                <body style='background-color: #18A999;'>
                    <table width='100%' cellspacing='0' cellpadding='0' class='container'>
                        <tr>
                            <td align='center'>
                                <table class='email-box'>
                                    <tr>
                                        <td align='center'>
                                            <img src='https://drive.google.com/uc?export=view&id=1Yx3BxFwlyKo9rKeQGCeMqdQCM_viuww8' alt='Ofiteca' class='logo'style=max-width: 200px; margin-top: 20px > 
                                            <h2 style='color: #033F63;'>¡Gracias por contactarnos, $nombre!</h2>
                                            <p style='color: #555; font-size: 16px;'>Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo lo antes posible.</p>
                                            <hr class='divider'>
                                            <p class='footer'>
                                                <strong>📞 Atención al Cliente:</strong> (+34) 958 99 92 35 <br>
                                                <strong>✉️ Email:</strong> <a href='mailto:administracion@ofiteca.com'>administracion@ofiteca.com</a>
                                            </p>
                                            <p class='footer'>
                                                📍 <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00 (hora España)
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            ";
            $mail->send();

            return "Correos enviados correctamente.";
        } catch (Exception $e) {
            return "Error al enviar el correo: {$mail->ErrorInfo}";
        }
    }
}

?>
