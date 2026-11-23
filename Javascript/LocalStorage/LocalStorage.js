//localStorage
//Browser provides an temporary database called localStorage to store data in key-value pairs. The data stored in localStorage is persistent and will not be deleted when the browser is closed. It can be accessed using JavaScript.

localStorage.setItem("Place","Pune")
localStorage.setItem("age",22)
localStorage.setItem("job","IT")

let place = localStorage.getItem("Place")
console.log(place)

localStorage.removeItem("Place")

localStorage.clear()