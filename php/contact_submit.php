<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set JSON header
header('Content-Type: application/json');

// Database configuration for XAMPP localhost
$servername = "localhost";
$username = "root";      // Default XAMPP username
$password = "";          // Default XAMPP password (empty)
$dbname = "shoeverse_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode([
        'success' => false, 
        'message' => 'Database connection failed: ' . $conn->connect_error
    ]);
    exit;
}

// Set charset to UTF-8
$conn->set_charset("utf8mb4");

// Check if form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get and sanitize input data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = 'Name is required';
    } elseif (strlen($name) < 2) {
        $errors[] = 'Name must be at least 2 characters';
    }
    
    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email format';
    }
    
    if (empty($message)) {
        $errors[] = 'Message is required';
    } elseif (strlen($message) < 10) {
        $errors[] = 'Message must be at least 10 characters';
    }
    
    // If there are validation errors
    if (!empty($errors)) {
        echo json_encode([
            'success' => false, 
            'message' => implode(', ', $errors)
        ]);
        exit;
    }
    
    // Prepare SQL statement (prevents SQL injection)
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, message, created_at, status) VALUES (?, ?, ?, ?, NOW(), 'new')");
    
    if ($stmt === false) {
        echo json_encode([
            'success' => false, 
            'message' => 'Database error: ' . $conn->error
        ]);
        exit;
    }
    
    // Bind parameters
    $stmt->bind_param("ssss", $name, $email, $phone, $message);
    
    // Execute statement
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        ]);
        
        // Optional: Send email notification to admin
        // $admin_email = "admin@shoeverse.com";
        // $subject = "New Contact Form Submission from $name";
        // $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        // mail($admin_email, $subject, $email_body, "From: noreply@shoeverse.com");
        
    } else {
        echo json_encode([
            'success' => false, 
            'message' => 'Error saving your message. Please try again later.'
        ]);
    }
    
    // Close statement
    $stmt->close();
    
} else {
    // Invalid request method
    echo json_encode([
        'success' => false, 
        'message' => 'Invalid request method. Please use the contact form.'
    ]);
}

// Close connection
$conn->close();
?>