<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods:  GET, POST, OPTIONS");

include 'Db.php';
$objDB = new Db;
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $sql = 'SELECT * FROM register';
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $registers = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($registers);
        break;  
    case "POST":
        $new_register = json_decode(file_get_contents('php://input'));
        $sql = 'INSERT INTO register(register_name,  register_last_name, email, phone) VALUES (:register_name,  :register_last_name, :email, :phone)';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':register_name', $new_register->register_name);
        $stmt->bindParam(':register_last_name', $new_register->register_last_name);
        $stmt->bindParam(':email', $new_register->email);
        $stmt->bindParam(':phone', $new_register->phone);
           
        if($stmt->execute()) {
            $response = ['status' => 201, 'message' => 'Register created successfully.'];
        } else {
            $response = ['status' => 500, 'message' => 'Failed to create register.'];
        }
        echo json_encode($response);  
        break; 
}

?>