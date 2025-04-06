<?php
require 'vendor/autoload.php';

use Dotenv\Dotenv;

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$appEnv = $_ENV['APP_ENVIRONMENT'];

if ($appEnv == 'sandbox') {
    $apiUrl = "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken";
    $consumerKey = $_ENV['PESAPAL_SANDBOX_KEY'];
    $consumerSecret = $_ENV['PESAPAL_SANDBOX_SECRET'];
} elseif ($appEnv == 'live') {
    $apiUrl = "https://pay.pesapal.com/v3/api/Auth/RequestToken";
    $consumerKey = $_ENV['PESAPAL_LIVE_KEY'];
    $consumerSecret = $_ENV['PESAPAL_LIVE_SECRET'];
} else {
    echo "Invalid APP_ENVIRONMENT";
    exit;
}

$headers = [
    "Accept: application/json",
    "Content-Type: application/json"
];
$data = [
    "consumer_key" => $consumerKey,
    "consumer_secret" => $consumerSecret
];

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$data = json_decode($response);
$token = $data->token ?? null;

if ($token) {
    echo "Access Token: " . $token;
} else {
    echo "Failed to retrieve token. Response: " . $response;
}
