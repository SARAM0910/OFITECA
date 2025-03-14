<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Cargar variables de entorno desde .env
function getEnvValue($key) {
    $lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($envKey, $envValue) = explode('=', $line, 2);
        if ($envKey === $key) {
            return trim($envValue);
        }
    }
    return null;
}

$config = [
    'smtp_host' => getEnvValue('SMTP_HOST'),
    'smtp_user' => getEnvValue('SMTP_USER'),
    'smtp_pass' => getEnvValue('SMTP_PASS'),
    'smtp_port' => getEnvValue('SMTP_PORT'),
];
?>
