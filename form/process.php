<!DOCTYPE html>
<html>
<head>
  <title>Contact Details</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      padding: 40px;
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      font-weight: bold;
    }

    p {
      background: #fff;
      padding: 10px;
      border-radius: 6px;
      margin: 8px 0;
    }

    span {
      font-weight: bold;
    }

    .success {
      background: #d4edda;
      color: #155724;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 20px;
    }

    .error {
      background: #f8d7da;
      color: #721c24;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 20px;
    }

  </style>

</head>
<body>

<div>

<?php

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get values safely
    $name       = htmlspecialchars($_POST["fullname"]);
    $phone      = htmlspecialchars($_POST["phone"]);
    $email      = htmlspecialchars($_POST["email"]);
    $message    = htmlspecialchars($_POST["message"]);

    // Simple required field check using conditional statement
    if (empty($name) || empty($email) || empty($message)) {

        echo "<div class='error'>";
        echo "<h2>Error!</h2>";
        echo "<p>Name, Email and Message are required.</p>";
        echo "</div>";

    } else {

        // Success message
        echo "<div class='success'>";
        echo "<h2>Success!</h2>";
        echo "<p>Your form has been submitted successfully.</p>";
        echo "</div>";

        echo "<h2>Contact Information Received</h2>";

        echo "<p><span>fullname:</span> $name</p>";
        echo "<p><span>Phone:</span> $phone</p>";
        echo "<p><span>Email:</span> $email</p>";
        echo "<p><span>Message:</span> $message</p>";
    }

} else {

    echo "<div class='error'>";
    echo "<h2>Invalid Request</h2>";
    echo "<p>Please submit the form properly.</p>";
    echo "</div>";
}

?>

</div>

</body>
</html>