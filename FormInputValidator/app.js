// get element
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// FormInput Validator
const formInputValidator = /^(?=\D{8})(?=\D*\d{2})/
// add event listeners

usernameInput.addEventListener('input',validate );
passwordInput.addEventListener('input',validate );

// function validate

function validate(e){
    // check for id 
    if(e.target.id === 'username'){
        // check for character
        if(e.target.value.length > 3){
            e.target.classList.add('valid')
            e.target.classList.remove('invalid')

        }else {
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')

        }
    } 
    if(e.target.id === 'password'){
        // check formInputValidator
        if(formInputValidator.test(e.target.value)){
            e.target.classList.add('valid')
            e.target.classList.remove('invalid')
        }else {
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')
        }
    }
    
}