//targeting only one  html elements with classId
//we can access only a document and will not give a # og getElementById 
let fest = document.getElementById("fest")
console.log(fest)

//targeting multiple html elements with className
let movies = document.getElementsByClassName("movie")
console.log(movies)

//targeting html element with query selector methos
//in this method we used the # as an id and class as an . 
let text = document.querySelector("#fest")
console.log(text)

//targeting multiple html element with query selector all methods
// same like we used id # and class .
let cinema = document.querySelectorAll(".movie")
console.log(cinema)

let para = document.getElementsByClassName("para")
console.log(para)