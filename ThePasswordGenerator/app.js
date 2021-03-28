//  get element
const rangeCharacters = document.querySelector("#range-char");
const numberCharacters = document.querySelector("#number-char");
const formContainer = document.querySelector("#password-form");
const numbersE1 = document.querySelector("#numbers");
const symbolsE1 = document.querySelector("#symbols");
const uppercasesE1 = document.querySelector("#uppercase");
const passwordDisplay = document.querySelector("#password-display");

const lowercaseCharCode = arrayLowToHigh(97, 122);
// console.log(lowercaseCharCode);
const numberCharactersCodes = arrayLowToHigh(48, 57);
const symbolsCharacterCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123.126);
const uppercaseCharCodes = arrayLowToHigh(65, 90);

// synchronizing the range and numbers input
rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  // console.log(valueAmount);
  //  synchronizing number both of them
  rangeCharacters.value = valueAmount;
  numberCharacters.value = valueAmount;
}

// Generating the password when the form is submitted
formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  const characterAmount = numberCharacters.value;
  const includeUppercase = uppercasesE1.checked;
  const includeNumbers = numbersE1.checked;
  const includeSymbols = symbolsE1.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerHTML = password;
});
// generatePassword function
function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowercaseCharCode; 
  if(includeNumbers) charCodes = charCodes.concat(numberCharactersCodes);
  if(includeSymbols) charCodes = charCodes.concat(symbolsCharacterCodes);
  if(includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
  // console.log(charCodes);
  let passwordCharacter = [];

  for(let i =0;i<=characterAmount;i++ ){
    let randomCharacter = charCodes[Math.floor(Math.random()* charCodes.length)]
    passwordCharacter.push(String.fromCharCode(randomCharacter))
  }
  console.log(passwordCharacter);
  return passwordCharacter.join("");

}

// character code looping function

function arrayLowToHigh(low, high) {
  let arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}
