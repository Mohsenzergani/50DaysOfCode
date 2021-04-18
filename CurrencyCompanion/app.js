const fromCurrencyInput = document.querySelector(".from-currency");
const toCurrencyInput = document.querySelector(".to-currency");
const exchangeAmountInput = document.querySelector(".amount");
const getRateBtn = document.querySelector(".get-rate");

// get rate btn 
getRateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const fromCurrencyValue = fromCurrencyInput.value;
  const toCurrencyValue = toCurrencyInput.value;
  const exchangeAmountValue = exchangeAmountInput.value;

  if (
    fromCurrencyValue === "" ||
    toCurrencyValue === "" ||
    exchangeAmountValue === ""
  ) {
    inputError();
  } else {
    convertCurrency(fromCurrencyValue, toCurrencyValue, exchangeAmountValue)
      .then((exchangeResult) => {
        document.querySelector(".currency-item").innerText = exchangeResult;

        setTimeout(() => {
          location.reload();
        }, 6000);
      })
      .catch(() => invalidCode());
  }
});
//  get Exchange Rate
 async function getExchangeRate(fromCurrency,toCurrency) {
   const response = await fetch('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');
   const data = await response.json();
  //  console.log(data)
  const currencyRates = data.rates;
  const baseCurrency = 1 /currencyRates[fromCurrency];
  const exchangeRate = baseCurrency * currencyRates[toCurrency];
  if(isNaN(exchangeRate)){
    console.log("error")
  }
  console.log(exchangeRate)
  return exchangeRate;
}

//  getExchangeRate('AFN',"USD");

// convert Currency
async function convertCurrency(fromCurrency,toCurrency,exchangeAmount){
  const amountExchange = await getExchangeRate(fromCurrency,toCurrency);
  const convertedAmount = (exchangeAmount * amountExchange).toFixed(2);
  return `${exchangeAmount} ${fromCurrency} ====> ${convertedAmount} ${toCurrency}`;
}

// --------------------------------------------------------------------------------------------------------------
function inputError() {
  document.querySelector(".input-error").classList.add("show");
  setTimeout(() => {
    document.querySelector(".input-error").classList.remove("show");
  }, 2500);
}

function invalidCode() {
  document.querySelector(".invalid-code").classList.add("show");
  setTimeout(() => {
    document.querySelector(".invalid-code").classList.remove("show");
  }, 1500);
}
