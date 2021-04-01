// get elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// showError function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
  // console.log(small)
}
// showSuccess msg function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// check email is Validator
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    // trim() method removes whitespace from both ends of a string
    showSuccess(input);
  } else {
    showError(input, "Email is not Valid");
  }
}
// Check required felid Function
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// check length for character
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`

    );
  }else if(input.value.length >  max){
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  }else {
    showSuccess(input)
  }
}
// getFieldName function
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password match
function checkPasswordsMatch(input1,input2){
  if(input1.value !== input2.value){
    showError(input2,`Password do not match`);
  }
}
// implementing form event listeners for submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username,3,15)
  checkLength(password, 6, 25);
  checkPasswordsMatch(password,password2)
});
