<?php

require __DIR__ . '/../src/Mailer.php';

// Configurar CORS
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Manejar preflight (solicitudes OPTIONS)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

use Ofiteca\Api\Mailer;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recibir datos JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Validar datos
    if (!isset($data["nombre"], $data["email"], $data["asunto"], $data["mensaje"])) {
        http_response_code(400);
        echo json_encode(["error" => "Todos los campos son obligatorios."]);
        exit;
    }

    // Instanciar y enviar el correo
    $mailer = new Mailer();
    $response = $mailer->sendEmail($data["nombre"], $data["email"], $data["asunto"], $data["mensaje"]);

    // Responder con éxito o error
    if (strpos($response, "Error") === false) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => $response]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => $response]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
}

?>
