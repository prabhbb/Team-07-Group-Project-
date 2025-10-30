<?php
session_start();

// hard-coded credentials
$valid_username = "admin";
$valid_password = "password123";

$error = "";
$success = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $username;
        $success = "Login successful! Redirecting...";
        // TODO: link to dashboard
        // header("Location: dashboard.php");
        // exit();
    } else {
        $error = "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make-It-All - Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <div class="company-logo">
            <h1 class="company-name">Make-It-All</h1>
            <p class="company-tagline">Innovative Solutions for Everyone</p>
        </div>

        <h2>Welcome Back</h2>

        <form method="POST" action="">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="btn-login">Login</button>

            <?php if ($error): ?>
                <div class="message error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>

            <?php if ($success): ?>
                <div class="message success"><?php echo htmlspecialchars($success); ?></div>
            <?php endif; ?>
        </form>

        <div class="info">
            <strong>Test Credentials:</strong><br>
            Username: admin<br>
            Password: password123
        </div>
    </div>
</body>
</html>