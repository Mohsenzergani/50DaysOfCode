// first get element 
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total")
const movieSelect = document.querySelector("#movie");


const ticketPrice = parseInt(movieSelect.value);


// 1 seat Click event

container