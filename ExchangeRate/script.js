// 1--- get elements 
const currencyEl_one = document.querySelector('#currency-one');
const amountEl_one = document.querySelector('#amount-one');
const currencyEl_two = document.querySelector('#currency-two');
const amountEl_two = document.querySelector('#amount-two');


const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');
const api_Key = '42a7b141fe9ce130e754984b';
// 3----  fetch exchange rates and update the dom
function calculate(){
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/${api_Key}/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.conversion_rates[currency_two];
    // console.log(rate)

    rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)

  })

  // console.log(currency_one,currency_two)
}


//2 ---  event listeners
currencyEl_one.addEventListener("change",calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

// 4---- swap eventListener
swap.addEventListener('click',() => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  // console.log(currencyEl_one.value)
  currencyEl_two.value = temp;
  calculate()
})


// init 
calculate()
