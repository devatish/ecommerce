<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header("Access-Control-Allow-Headers: X-Requested-With");
	header('Content-Type: application/json; charset=utf-8');
	require __DIR__ . '/vendor/autoload.php';
	use Firebase\JWT\JWT;
	use Firebase\JWT\Key;
	$json = file_get_contents('php://input');
	$data = json_decode($json);
	$jwtoken = $data->jwtoken;
	$secretKey = 'think360';
	//$jwtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIifQ.eyJpc3MiOiJodHRwczovL3RyYW5zcG9ydGNybS5jby51ay8iLCJhdWQiOiJodHRwczovL3RyYW5zcG9ydGNybS5jby51ay8iLCJpYXQiOjE2ODM4ODE5NjIsImV4cCI6MTY4Mzg4NTU2Miwic3ViIjoiMiIsIm5hbWUiOiJKYXN3aW5kZXIgU2luZ2gifQ.cQGBk1234XHDbrOB8Q7rgNbfdHqBVDuVsJd_kR-T-4Y";
	try {
	    //$decoded = JWT::decode($jwtoken, $secretKey, ['HS256']);
	    $decodedToken = JWT:: decode ($jwtoken, new key ($secretKey,'HS256'));
	    $response['error'] = 0;
	    $response['msg'] = 'Token is valid.';
	} catch (\Firebase\JWT\ExpiredException $e) {
	    $response['error'] = 1;
	    $response['msg'] = 'Token has expired.';
	} catch (\Firebase\JWT\SignatureInvalidException $e) {
	    $response['error'] = 1;
	    $response['msg'] = 'Invalid token signature.';
	} catch (Exception $e) {
	   	$response['error'] = 1;
	    $response['msg'] = $e->getMessage();
	}
	
	echo json_encode($response);
?> 