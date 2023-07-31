<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "evoting";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $cnic = $_POST['cnic'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    // Prepare and bind the insert statement
    $stmt = $conn->prepare("INSERT INTO users (name, cnic, dob, email, password) VALUES ('$name', '$cnic', '$dob', '$email', '$pass'");
    $stmt->bind_param("sssss", $name, $cnic, $dob, $email, $password);

    if ($stmt->execute()) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
