// All JS code goes here

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    var text;

    errorMessage.style.padding = "10px";

    if (email == "") {
        text = "Please input your email address.";
        errorMessage.innerHTML =text;
        document.getElementById('email').focus();
        return false;
    }

    if (email.indexOf("@") == 1) {
        text = "Please input a valid email address.";
        errorMessage.innerHTML = text;
        document.getElementById('email').focus();
        return false;
    }

    if (password == "") {
        text = "Please input your password.";
        errorMessage.innerHTML = text;
        document.getElementById('password').focus();
        return false;
    }
    
    if (password.length < 8 || password.length > 12) {
        text = "Password should not be less than 8 or greater than 12 characters.";
        errorMessage.innerHTML = text;
        document.getElementById('password').focus();
        return false;
    }

    alert("Login successful!");
    return false;
}