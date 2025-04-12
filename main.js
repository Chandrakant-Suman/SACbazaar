document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirmPassword-error");

    
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    
    const usernameRegex = /^[a-zA-Z0-9]{4,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    let isValid = true;

    
    if (!usernameRegex.test(username)) {
        usernameError.textContent = "Username must be 4-30 characters and contain only letters and numbers(no special characters).";
        isValid = false;
    }

    
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 and atmost 16 characters long and contain letters and numbers.";
        isValid = false;
    }

    
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match!";
        isValid = false;
    }

    
    if (isValid) {
        alert("Registration successful!");
        window.location.href = 'home.html';
    }
});