// get the elements
const slider = document.querySelector(".container");
let isDown = false;
let startx;
let scrollToLeft;


// mouse down 
slider.addEventListener('mousedown',function(e){
  isDown = true;
  slider.classList.add('active');
  startx = e.pageX - slider.offsetLeft;
  scrollToLeft = slider.scrollLeft;

   
})


// mouse up
slider.addEventListener("mouseup",function(e){
  isDown = false;
  slider.classList.remove("active");
})
// mouse leave
slider.addEventListener("mouseleave",function(e){
  isDown = false;
  slider.classList.remove("active");
})

// mouse move
slider.addEventListener("mousemove",function(e){
  if(!isDown) return;
  e.preventDefault();
  const distanceX = e.pageX - slider.offsetLeft;
  const walk = distanceX - startx;
  slider.scrollLeft = scrollToLeft -walk;
})