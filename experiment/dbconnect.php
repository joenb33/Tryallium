<?php
  include '../dbconfig.php';
  
  // Connect to database
  $conn = mysqli_connect($server, $username, $password, $database);
  
  // Check if connection was successful
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
?>