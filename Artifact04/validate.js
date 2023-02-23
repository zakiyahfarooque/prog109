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

  // initialize array to store error messages
  var errorMessages = [];

  // validate name
  var nameRegex = /^[a-zA-Z]{1,20}$/;
  if (!nameRegex.test(name)) {
    errorMessages.push("Name should only contain alphabetical characters and be between 1 and 20 characters long.");
    document.getElementById("nameError").innerHTML = "Name should only contain alphabetical characters and be between 1 and 20 characters long.";
    document.getElementById("nameError").classList.add("error");
  }

  // validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessages.push("Email is not valid.");
    document.getElementById("emailError").innerHTML = "Email is not valid.";
    document.getElementById("emailError").classList.add("error");
  }

  //
