// https://icanhazdadjoke.com/api

const jokePar = document.querySelector(".joke");
const jokeBtn = document.querySelector('button');

// console.log(jokeBtn)
jokeBtn.addEventListener('click',getJoke);

// get joke in api

async function getJoke (){
  const res = await fetch("https://icanhazdadjoke.com/",{
    headers: {
      Accept: "application/json",
    },
  })
  const data = await res.json();
  console.log(data)
  jokePar.innerHTML = data.joke;
}

