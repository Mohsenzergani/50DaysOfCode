// mikahye age roye har aksye cllick kardim ono be sorat bozorg neshon bede


const fullImage = document.querySelector(".full-img");
const smallImage = document.querySelectorAll(".gallery img");

const modal =  document.querySelector('.modal');


smallImage.forEach( img => {
     img.addEventListener('click', () =>{
          modal.classList.add('open');
          fullImage.classList.add("open")
        
          const originalQuantity = img.getAttribute('alt');
          fullImage.src = `img/full/${originalQuantity}.jpg`;
     })
})

modal.addEventListener("click", (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        fullImage.classList.remove('open')
    }
    
})