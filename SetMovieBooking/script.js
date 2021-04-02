// first get element 
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total")
const movieSelect = document.querySelector("#movie");

populateUI();
let ticketPrice = parseInt(movieSelect.value);

// 5--- get data from local storage and populate UI
function populateUI() {
    // get selectedSeats info from local storage
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  // console.log(selectedSeats)
  // check selectedSeats if is null or empty
  if(selectedSeats !== null && selectedSeats.length > 0){
    // loop the seats 
    seats.forEach((seat,index) => {
      if(selectedSeats.indexOf(index) > -1){ // in method indexOF if index > -1 it mean is there
        seat.classList.add('selected');
      }
    })
  }
  // get movie index form localStorage
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  // check selectedMovieIndex is not null or empty
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}
// 4---  save selected movie index and price
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}
// 2--- update Total and count 
function updateSelectedCount(){
  // selected all seats has selected Class
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  // save to local storage
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))
  // show the length of the user selected 
  const selectSeatCount = selectedSeats.length;
  // show the count of seat in user
  count.innerHTML = selectSeatCount;
  // show the total price
  total.innerHTML = selectSeatCount * ticketPrice;

}
// 3--- movie select event
movieSelect.addEventListener('change',e => {
  // get ticket price and parse to number
  ticketPrice = parseInt(e.target.value);
  // setMovie for get the index of movie with price 
  setMovieData(e.target.selectedIndex, e.target.value)
  // update count and price
  updateSelectedCount();
})
// 1--- seat Click event
container.addEventListener('click', (e) =>{
  // console.log(!e.target.classList.contains('occupied'))
  if(e.target.classList.contains('seat') &&  !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})


// Initial count and total set
updateSelectedCount();
