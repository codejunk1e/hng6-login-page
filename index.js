// All JS code goes here
// Login validation starts here
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
    
    if (password.length < 8) {
        text = "Password should be a minimum of 8 characters.";
        errorMessage.innerHTML = text;
        document.getElementById('password').focus();
        return false;
    }

    alert("Login successful!");
    return false;
}
// login validation end here

// sign up validation starts here
function validateSignUp () {
    var fullName = document.getElementById('Full-Name').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var passwordAgain = document.getElementById('Confirm-password').value;
    var errorMessage1 = document.getElementById('errorMessage1');
    var text1;

    errorMessage1.style.padding = "10px";
    
    if (fullName == "") {
        text1 = "input your full name please.";
        errorMessage1.innerHTML =text1;
        document.getElementById('Full-Name').focus();
        return false;
    }
    
    if (email == 1) {
        text1 = "You need to fill in your email address.";
        errorMessage1.innerHTML = text1;
        document.getElementById('Email').focus();
        return false;
    }
    
    if (email.indexOf("@") == 1) {
        text1 = "Please input a valid email address.";
        errorMessage1.innerHTML =text1;
        document.getElementById('Email').focus();
        return false;
    }
    
    if (password == "") {
        text1 = "in put your password please.";
        errorMessage1.innerHTML =text1;
        document.getElementById('password').focus();
        return false;
    }
    
    if (password.length < 8 || password.length > 12) {
        text1 = "Password should not be less than 8 or greater than 12 characters.";
        errorMessage1.innerHTML = text1;
        document.getElementById('password').focus();
        return false;
    }
    
    if (passwordAgain.length != password) {
        text1 = "Password must be the same.";
        errorMessage1.innerHTML =text1;
        document.getElementById('Confirm-password').focus();
        return false;
    }

    alert("Thank you for signing up.");
    return false;
}
// sign-up ends here