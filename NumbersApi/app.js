// http://numbersapi.com/

const factPar = document.querySelector(".fact");
const inputFact = document.querySelector('input');
const factBtn = document.querySelector("button");


factBtn.addEventListener('click',() => {
  const number = inputFact.value;
  const factNumber = parseInt(number)
  getFact(factNumber)
})

async function getFact(number) {
  const factUrl = "http://numbersapi.com/";
  const proxUrl = "https://cors-anywhere.herokuapp.com/";
  const res = await fetch(`${proxUrl}${factUrl}${number}`,{
    method: 'GET',
    headers: {
      "x-requested-with": "text/plain",
    }
  })
  // convert res  ->  text
  const data = await res.text();
  factPar.innerHTML = data;
  
}