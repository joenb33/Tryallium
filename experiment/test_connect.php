<?php
require 'dbconnect.php';

// Check if the connection was successful
if ($conn) {
    echo "Connection to the database was successful!";
} else {
    echo "Connection to the database failed.";
}
?>