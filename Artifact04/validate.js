// Initialize form validator
var frmvalidator = new Validator("myForm");

// Add validation rules for form inputs
frmvalidator.addValidation("name","req","Please enter your name.");
frmvalidator.addValidation("name","alpha_s","Name must only contain alphabetical characters.");
frmvalidator.addValidation("name","maxlen=20","Name must be no longer than 20 characters.");

frmvalidator.addValidation("email","req","Please enter your email address.");
frmvalidator.addValidation("email","email","Please enter a valid email address.");

frmvalidator.addValidation("phone","req","Please enter your phone number.");
frmvalidator.addValidation("phone","numdash","Phone must only contain numerical characters and dashes.");

frmvalidator.addValidation("username","req","Please enter a username.");

frmvalidator.addValidation("password","req","Please enter a password.");
frmvalidator.addValidation("password","maxlen=7","Password must be no longer than 7 characters.");
frmvalidator.addValidation("password","regexp=^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\\'\\\"<>,./?\\\\]).*$","Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");

frmvalidator.addValidation("state","req","Please enter your state/province.");

frmvalidator.addValidation("country","dontselect=0","Please select a country.");
frmvalidator.addValidation("zipcode","req","Please enter your zipcode.");
frmvalidator.addValidation("zipcode","num","Zipcode must only contain numerical characters.");
frmvalidator.addValidation("zipcode","maxlen=5","Zipcode must be no longer than 5 characters.");

// Set error message display location
frmvalidator.setAddnlValidationFunction(showErrors);
frmvalidator.setFormFocus(true);

// Function to show error messages
function showErrors() {
  var errors = frmvalidator._error
