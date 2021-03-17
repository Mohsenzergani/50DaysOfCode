//  mikham har vaght roye button click karidm modal neshon bede
// bary in kar bayad class show be model contianer ezafe koim

const openBtn = document.querySelector(".open");
const modalContainer = document.querySelector(".modal-container");

const closeBtn =document.querySelector('.modal-btn');

openBtn.addEventListener('click',function(){
    modalContainer.classList.add('show')
})


closeBtn.addEventListener('click',function(){
    modalContainer.classList.remove('show')
})