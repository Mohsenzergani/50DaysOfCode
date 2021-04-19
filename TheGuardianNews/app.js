// https://open-platform.theguardian.com/

// get elements
const newInput =  document.querySelector(".news-input");
const form = document.querySelector("form");
const newsContainer = document.querySelector(".news-container");


form.addEventListener("submit",(e) => {
  e.preventDefault();
  const searchQuery = newInput.value;
  // get news from the guardian
  getAPi(searchQuery)
})


async function getAPi(searchQuery) {
  const apiKey = "472507e5-daed-4ddb-bf10-c2ea61d4979b";
  const res = await fetch( `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${apiKey}`)
  const newsData = await res.json();
  showResults(newsData.response.results)

}
// 
function showResults(results){
  let fetchedNews = "";

  results.forEach(result => {
    console.log(result)
    let newsSection = result.sectionName;
    let newsDate = result.webPublicationDate;
    let newsUrl = result.webUrl;
    let newsTitle = result.webTitle;
    fetchedNews += `
      <div class="news">

      <p>${newsSection}</p>
      <p>${newsDate}</p>
      <a href="${newsUrl} target="_blank">${newsTitle}</a>
      </div>
    `
    newsContainer.innerHTML = fetchedNews;
  })

}