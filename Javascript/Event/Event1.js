let btn = document.getElementById("btn")

//double click holds the mouseEvet
btn.addEventListener("dblclick",(event) => {
  console.log(event)
  console.log(event.target)
  console.log("dbl clicked")
})

//click holds the ponitsEvent
btn.addEventListener("click",(event) => {
  console.log(event)
  console.log("dbl clicked")
})

let input = document.getElementById("input")

//keyPress holds the keybordevent
input.addEventListener("keypress",(event) =>{
  console.log(event)
})

//task
let input1 = document.getElementById("input1")
input1.addEventListener("keypress",(event)=>{
  console.log(event)
  input1.style.background = "blue"
  input1.style.color = "white"
})
 
input1.addEventListener("keyup", (event) => {
  console.log(event)
  input1.style.background = "yellow"
})



