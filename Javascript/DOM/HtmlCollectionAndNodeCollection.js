let msg = document.getElementById("msg")
msg.style.color = "pink"
msg.style.backgroundColor = "yellow"
msg.style.padding = "20px"
msg.style.height = "20px"
msg.style.width = "300px"
console.log(msg)

let movies = document.getElementsByClassName("movies")
//this method will not work for the all h1 tag or class only first element target 
// movies.style.color = "pink"
//we taget using indexing array because of its look like a array -> html collection
//we separately styling the same color and same style thats why we will used the querySelectorAll
//this will not support the iteration

movies[0].style.color = "red"
movies[1].style.color= "red"
movies[2].style.color ="red"
// movies.forEach((ele) => ele.style.color = "aqua") -> not support

let cinema = document.querySelectorAll(".movies")
console.log(cinema)
cinema.forEach((ele) => ele.style.color = "aqua") //it supprot iteration 

//methods of dom
// 1) createElement - it is a dom method which is used to insert or add html elements 

