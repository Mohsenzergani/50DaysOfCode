// get element for picture
let cat = document.querySelector('.cat');
let fox = document.querySelector('.fox');
let dog = document.querySelector('.dog');


const catBtn = document.querySelector('.get-cat');
const dogBtn = document.querySelector('.get-dog');
const foxBtn = document.querySelector('.get-fox');

// https://aws.random.cat/meow

catBtn.addEventListener("click",getCat);
dogBtn.addEventListener("click",getDog);

// get cat 
async function getCat(){
  const res = await fetch(`https://aws.random.cat/meow`);
  const data = await res.json();
 cat.innerHTML = `<img src="${data.file}"/>`
}
// get dog pic api
async function getDog(){
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json();
 dog.innerHTML = `<img src="${data.message}"/>`;
//  console.log(data.message)
}

