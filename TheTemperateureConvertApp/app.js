// get the element
const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInput = document.querySelectorAll("input");

tempInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let tempValue = parseInt(e.target.value);
    let inputName = e.target.name;
    if(e.target.value === ""){
      celsiusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }
    if (inputName === "celsius") {
      // Celsius to Fahrenheit
      let fahrenheitValue = tempValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);

      // Celsius to kelvin
      let kelvinValue = tempValue + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
      fahrenheitInput.value = tempValue * 1.8 + 32;
      kelvinInput.value = tempValue + 273.15;
    } else if (inputName === "fahrenheit") {
      // Fahrenheit to Celsius
      let celsiusValue = (tempValue - 32) / 1.8;
      celsiusInput.value = celsiusValue.toFixed(2);

      // Fahrenheit to kelvin
      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === "kelvin") {
      celsiusInput.value = (tempValue - 32) / 1.8;
      kelvinInput.value = (tempValue - 32) / 1.8 + 273.15;
    } else if (inputName === "kelvin") {
      // Kelvin to Celsius
      let celsiusValue = tempValue - 273.15;
      celsiusInput.value = celsiusValue.toFixed(2);

      // Kelvin to Fahrenheit
      let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});
