function validateForm() {
  // get form input values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var state = document.getElementById("state").value.trim();
  var country = document.getElementById("country").value.trim();
  var zipcode = document.getElementById("zipcode").value.trim();

  // clear error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("zipcodeError").innerHTML = "";

  // validate name
  var nameRegex = /^[a-zA-Z]{1,20}$/;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerHTML = "Name should only contain alphabetical characters and be between 1 and 20 characters long.";
    return false;
  }

  // validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Email is not valid.";
    return false;
  }

  // validate phone
  var phoneRegex = /^[0-9-]+$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Phone number should only contain numbers or numbers and dashes.";
    return false;
  }

  // validate username
  if (username.length < 3) {
    document.getElementById("usernameError").innerHTML = "Username should be at least 3 characters long.";
    return false;
  }

  // validate password
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{1,7}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").innerHTML = "Password should be between 1 and 7 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%^&+=!).";
    return false;
  }

  // validate zipcode
  if (country.toLowerCase() === "usa" && zipcode.length !== 5) {
    document.getElementById("zipcodeError").innerHTML = "Zipcode should be 5 digits long.";
    return false;
  }

  // return true if all validations pass
  return true;
}
