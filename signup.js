function validateSignUp () {
    var fullName = document.getElementById('Full-Name').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var passwordAgain = document.getElementById('Confirm-password').value;
    var errorMessage1 = document.getElementById('errorMessage1');
    var text;

    errorMessage1.style.padding = "10px";
    
    if (fullName == "") {
        text = "input your full name please.";
        errorMessage1.innerHTML =text;
        document.getElementById('Full-Name').focus();
        return false;
    }
    
    if (email == 1) {
        text = "You need to fill in your email address.";
        errorMessage1.innerHTML = text;
        document.getElementById('Email').focus();
        return false;
    }
    
    if (email.indexOf("@") == 1) {
        text = "Please input a valid email address.";
        errorMessage1.innerHTML =text;
        document.getElementById('Email').focus();
        return false;
    }
    
    if (password == "") {
        text = "input your password please.";
        errorMessage1.innerHTML =text;
        document.getElementById('password').focus();
        return false;
    }
    
    if (password.length < 8 || password.length > 12) {
        text = "Password should not be less than 8 or greater than 12 characters.";
        errorMessage1.innerHTML = text;
        document.getElementById('password').focus();
        return false;
    }
    
    if (passwordAgain.length != password) {
        text = "Password must be the same.";
        errorMessage1.innerHTML =text;
        document.getElementById('Confirm-password').focus();
        return false;
    }

    alert("Thank you for signing up.")
    return false;
}