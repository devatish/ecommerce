<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header("Access-Control-Allow-Headers: X-Requested-With");
	header('Content-Type: application/json; charset=utf-8');
	$servername = "localhost";
	$username = "root";
	$password = "think360";
	$dbname = "reactapp";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$json = file_get_contents('php://input');
	$data = json_decode($json);
	$email = $data->email;
	$password = md5($data->password);

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	require __DIR__ . '/vendor/autoload.php';

	use Firebase\JWT\JWT;
	use Firebase\JWT\Key;

	$secretKey = 'think360';
	$sql = "select * from users where email= '".$email."' and password='".$password."'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$header = array(
			    "alg" => "HS256",
			    "typ" => "JWT",
			    "kid" => $row["id"]
			);
			$payload = array(
				"iss" => "https://transportcrm.co.uk/",
				"aud" => "https://transportcrm.co.uk/",
				"iat" => time(), // Issued at
				"exp" => time() + (60 * 60),
				"sub" => $row["id"],
				"name" => $row["firstname"].' '.$row['lastname']
			);
			$jwt = JWT::encode($payload, $secretKey, 'HS256', null , $header);
		}
		$response['error'] = '0';
		$response['token'] = $jwt;
	} else {
		$response['error'] = '1';
	}
	echo json_encode($response);
	$conn->close();
?> 