// get element input
const searchInput = document.querySelector(".search");
const suggestionsContainer = document.querySelector(".suggestions");
// add event listeners (change)
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

// get api
const citiesStates = [];
// api "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
async function getAPi() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  );
  const data = await res.json();
  citiesStates.push(...data);
}
// to find matches word user type
function findMatches(worldToMatch, citiesStates) {
  // filter citiesStates and find the word matches
  return citiesStates.filter((cityState) => {
    const regX = new RegExp(worldToMatch, "gi");
    return cityState.city.match(regX) || cityState.state.match(regX);
  });
}
// displayMatches
function displayMatches() {
  const findArray = findMatches(this.value, citiesStates);

  const matchEl = findArray
    .map((place) => {
      const regX = new RegExp(this.value, "gi");

      const cityName = place.city.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );

      const stateName = place.state.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );

      return `<li class="name">${cityName}, ${stateName}</li>`;
    })
    .join("");

  suggestionsContainer.innerHTML = matchEl;
}
getAPi();
