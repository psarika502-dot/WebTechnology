//only we will target the parent not a specific target or individual target
let parent = document.getElementById("parent")
console.log(parent)

parent.addEventListener("click",(event)=>{
  console.log(event) //display the list items
  console.log(event.target) //tareget the list items
  document.getElementById("content").innerHTML=event.target.textContent //we will click the any list item ex: html,css then display the list items after clicking
})

