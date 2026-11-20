//toggle method is used to add and remove the class name
let btn = document.getElementById("btn")
let text = document.getElementById("text")

btn.addEventListener("click", () =>{
  text.classList.toggle("style")
})  