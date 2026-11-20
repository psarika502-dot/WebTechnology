// global variable or window object
var age
console.log(age)
var age = 20;
console.log(age)

//var is a window object thats why it will throw the error before intialiation and declarion
var place= "pune"
console.log(place)

//hositing or public variable 
var place2 = "mumbai"
console.log(place2)
//we will use window function in only var
console.log(window.place2) //mumbai
console.log(Window)


//hoisting with another identifier 
//implicitily the declarion will be word to top of the code or js
console.log(word)
var word = "Sarikha"
console.log(word)
 
//hoisting is not possible for let and const 
//we cant access before intialize and declaration

// console.log(city)
let city = "akot"
console.log(city)

//we can't use window function
let city2 = "yavatmal"
console.log(window.city2) //undefined

//global variable
const name2 = "Vaishu"
console.log(name2)

if(true){
  const name2 = "saru"
  console.log(name2)

  // const name2 = "shweta" -> error because we will not give the reinitializtion of same identifier
}

var name3 = "sakshi"
var number = 409;
if(true){
  console.log(number)
  console.log(name3)
  var number = 384
  console.log(number)
}




