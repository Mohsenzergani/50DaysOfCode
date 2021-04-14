// get element
const currentImg = document.querySelector('.current-img');
const imgs = document.querySelectorAll('.all-imgs img');


imgs.forEach(img => {
  img.addEventListener('click', (e) =>{
    currentImg.src = e.target.src;
    // console.log(currentImg)
    // for animated picture
    currentImg.classList.add('animate-imgs');
    setTimeout(() =>{
      currentImg.classList.remove('animate-imgs')
    },400)
  })
})