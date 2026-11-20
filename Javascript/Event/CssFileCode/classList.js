let h1 = document.createElement("h1")
document.body.appendChild(h1)
h1.innerHTML = "happy diwali"

//to connect js code to css code by using classList code
console.log(h1.classList)
//above 6 line gives the empty array

//classList Accept more than two class
h1.classList.add("style")
h1.classList.remove("style")
console.log(h1.classList)

let head = document.getElementById("head")
console.log(head)
console.log(head.classList)
console.log(head.classList.contains("content")) //true

head.classList.remove("content")
console.log(head.classList.contains("head")) //false


//we direct the class name but gives error
//beacause of we directed the class and remove the class : error:
// let content = document.getElementsByClassName("content")
// console.log(content.classList.remove("content"))




