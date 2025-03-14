<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'config.php'; // Cargar configuración
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Habilitar CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Verificar si la petición es POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["error" => "Método no permitido"]);
    exit();
}

// Capturar datos del formulario
$data = json_decode(file_get_contents("php://input"), true);
$nombre = $data["nombre"] ?? "";
$email = $data["email"] ?? "";
$asunto = $data["asunto"] ?? "";
$mensaje = $data["mensaje"] ?? "";

// Validar campos
if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
    echo json_encode(["error" => "Todos los campos son obligatorios."]);
    exit();
}

// Configurar PHPMailer
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];

    // Correo de contacto
    $mail->setFrom($email, $nombre);
    $mail->addAddress("saramarulanda12@gmail.com");
    $mail->Subject = "Nuevo mensaje de contacto: $asunto";
    $mail->isHTML(true);
    $mail->Body = "
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Mensaje:</strong></p>
        <p>$mensaje</p>
    ";
    $mail->send();

    // Respuesta automática al usuario
    $mail->clearAddresses();
    $mail->addAddress($email);
    $mail->Subject = "📩 ¡Gracias por tu contacto!";
    $mail->Body = "
        <html>
        <body>
            <h2>Gracias por contactarnos, $nombre</h2>
            <p>Hemos recibido tu mensaje y te contactaremos pronto.</p>
            <p>📞 (+34) 958 99 92 35 | ✉️ administracion@ofiteca.com</p>
        </body>
        </html>
    ";
    $mail->send();

    echo json_encode(["success" => true, "message" => "Correos enviados correctamente."]);
} catch (Exception $e) {
    echo json_encode(["error" => "Error al enviar el correo: " . $mail->ErrorInfo]);
}
?>
