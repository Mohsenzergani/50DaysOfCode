// 1 get elements
const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleBtn = document.querySelector("#double");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const calculateWealthBtn = document.querySelector("#calculate-wealth");
const sortBtn = document.querySelector("#sort");
let data = [];
getRandomUser();
getRandomUser();
getRandomUser();
// fetch random user and add money
async function getRandomUser() {
  // get user
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    gender: `${user.gender}`,
    money: Math.floor(Math.random() * 10000000),
  };
  addData(newUser);
}

// add new obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}
// update dom
function updateDOM(providedData = data) {
  main.innerHTML =
    "<h2><strong>Person</strong><span>Gender</span>  Wealth</h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong><span>${
      item.gender
    }</span> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
}
// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Double Money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}
// filter only Millionaires
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}

// sort by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
// Calculate the total wealth
function calculateWealth(){
  const wealth = data.reduce((acc,user) => (acc +=user.money),0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
  
}
// add user
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortBtn.addEventListener("click", sortByRichest);
calculateWealthBtn.addEventListener("click", calculateWealth);
