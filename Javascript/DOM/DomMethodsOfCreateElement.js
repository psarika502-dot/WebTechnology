//createElement -> it is dom method which is used to insert or add html element dynamically to the brower!

let h1 = document.createElement("h1")
console.log(h1)

//innerHTML - is method which is used to add the content between created element
//innerHTML - filter the tag
h1.innerHTML="Hello world"
document.body.appendChild(h1)
h1.style.color = "blue"
h1.style.backgroundColor = "pink"

//this message first see because we will write in html inside the body tag 
//only one thing whenever we write the code inside body tag this display first after the js code content 
let msg = document.createElement("h1")
document.getElementById("parent").appendChild(msg)
msg.innerHTML = "Hello state"

// let table1 = document.createElement("tr")
// document.getElementById("table").appendChild(table1)
// innerHTML = "id"
// console.log(table)

//textContent --> in double quotaion we will write this will display 
//textContent -> preffered 
//its maintain the size and font 
  

let msg1 = document.createElement("h1")
document.body.appendChild(msg1)
//inside inner html write anything we will display 
msg.innerHTML = "<h1>Hello World</h1>"
//insinde textContent write anything accurate dispaly on ui
msg.textContent = "<h1>Hello world</h1>"



let ol = document.querySelector("#list")

//appendChild -> this accept only one argument
let li = document.createElement("li")
li.textContent = "bike"
ol.appendChild(li) 

//append accept many argument
let li2 = document.createElement("li")
li2.textContent = "car"
ol.append(li2,"welcome")

//prepend -> it is used to add the child element at the start

let li3 = document.createElement("li")
li3.textContent = "truck"
ol.prepend(li3,"hii")

//remove -> it is used to remove an html element from the dom
msg.remove()


