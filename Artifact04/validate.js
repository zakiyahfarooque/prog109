function validateForm() {
  // get form input values
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var state = document.getElementById("state").value.trim();
  var country = document.getElementById("country").value.trim();
  var zipcode = document.getElementById("zipcode").value.trim();

  // clear error messages
  document.getElementById("formErrors").innerHTML = "";
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("zipcodeError").innerHTML = "";
  // initialize array to store error messages
  var errorMessages = [];

  // validate fisrt name
  var firstNameRegex = /^[a-zA-Z]{1,20}$/;
  if (!firstNameRegex.test(firstName)) {
  errorMessages.push("First name should only contain alphabetical characters and be between 1 and 20 characters long.");
  document.getElementById("firstNameError").innerHTML = "First name should only contain alphabetical characters and be between 1 and 20 characters long.";
  document.getElementById("firstNameError").classList.add("error");
  }

  //validate last name
  var lastNameRegex = /^[a-zA-Z]{1,50}$/;
  if (!lastNameRegex.test(lastName)) {
    errorMessages.push("Last name should only contain alphabetical characters and be between 1 and 50 characters long.");
    document.getElementById("lastNameError").innerHTML = "Last name should only contain alphabetical characters and be between 1 and 50 characters long.";
    document.getElementById("lastNameError").classList.add("error");
  }
  
  
  // validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessages.push("Email is not valid.");
    document.getElementById("emailError").innerHTML = "Email is not valid.";
    document.getElementById("emailError").classList.add("error");
  }

  // validate phone
  var phoneRegex = /^[0-9-]+$/;
  if (!phoneRegex.test(phone)) {
    errorMessages.push("Phone number should only contain numbers or numbers and dashes.");
    document.getElementById("phoneError").innerHTML = "Phone number should only contain numbers or numbers and dashes.";
    document.getElementById("phoneError").classList.add("error");
  }
  
  // validate username
  var usernameRegex = /^[a-zA-Z0-9_]{3,12}$/;
  if (!usernameRegex.test(username)) {
  errorMessages.push("Username should be between 3 and 12 characters long and may only contain alphanumeric characters and underscores.");
  document.getElementById("usernameError").innerHTML = "Username should be between 3 and 12 characters long and may only contain alphanumeric characters and underscores.";
  document.getElementById("usernameError").classList.add("error");
}

  // validate password
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{1,7}$/;
  if (!passwordRegex.test(password)) {
    errorMessages.push("Password should be between 1 and 7 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%^&+=!).");
    document.getElementById("passwordError").innerHTML = "Password should be between 1 and 7 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%^&+=!).";
    document.getElementById("passwordError").classList.add("error");
  }

  // validate zipcode
  if (country.toLowerCase() === "usa" && zipcode.length !== 5) {
    errorMessages.push("Zipcode should be 5 digits long.");
    document.getElementById("zipcodeError").innerHTML = "Zipcode should be 5 digits long.";
    document.getElementById("zipcodeError").classList.add("error");
    } else {
      document.getElementById("zipcodeError").innerHTML = "";
      document.getElementById("zipcodeError").classList.remove("error");
    }
  
    // display all error messages if any validations fail
    if (errorMessages.length > 0) {
      errorMessages.forEach(function(errorMessage) {
        var errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerHTML = errorMessage;
        document.getElementById("formErrors").appendChild(errorElement);
      });
  
      return false;
    }
  
    // return true if all validations pass
    return true;
}
