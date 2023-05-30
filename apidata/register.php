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
	$firstname = $data->firstname;
	$lastname = $data->lastname;
	$email = $data->email;
	$phone = $data->phone;
	$gender = $data->gender;
	$address = $data->address;
	$place = $data->place;
	$zipcode = $data->zipcode;
	$password = md5($data->password);
	$created_at = date('Y-m-d h:i:s');
	$updated_at = date('Y-m-d h:i:s');
	$sql = "INSERT INTO users (firstname, lastname, email, phone, gender, address, place, zipcode, password, created_at, updated_at)
	VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$phone."', '".$gender."', '".$address."', '".$place."', '".$zipcode."', '".$password."', '".$created_at."','".$updated_at."')";
	if ($conn->query($sql) === TRUE) {
		$response['data'] = '0';

	} else {
		$response['data'] = '1';
		//echo "Error: " . $sql . "<br>" . $conn->error;
		//return false;
	}
	echo json_encode($response);
	$conn->close();
?> 