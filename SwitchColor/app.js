// get body element for changing color
const body  = document.body;
// get button
const btn = document.querySelector('.switch')

// get p element for show color
const paraElement = document.querySelector(".color")

// add button event listeners
btn.addEventListener("click",function(){
    // get numbers
    let color1 = getRandomNum();
    let color2 = getRandomNum();
    let color3 = getRandomNum();

    const colorStr = `rgb(${color1}, ${color2} ,${color3})`;   
    console.log(colorStr)
    // use the colorStr to backgroundColor
    body.style.background = colorStr;
    paraElement.innerHTML  =colorStr;
})

// get function randomNumber

function getRandomNum(){
    return Math.floor(Math.random()* 256)
}