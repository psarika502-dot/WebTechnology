// Event:
//Traditional Way of Handling Events
//onclick: onclick is event which is used to perform an action when user click on the element. It is a mouse event.

function task() {
  alert("submit successfully");
}

//modern way of handling events
//addEventListener: addEventListener is a method which is used to perform an action when user click on the element. It is a mouse event.
// it is a event handler
// //we will used to two argument as event itself and  call back function using arrow function
//IT accept two arguments, first is event name and second is function name (CallBack Function).
//in call back function accept one argument such as event 
//paramenter : its holds the event pointerEvent
//syntax identifier.addEventListener("Event", () =>{
  // })

//modern way of handling events
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("btn click !")
  console.log("Hii i am from addEventListener");
})
//keypress: this event works for input
//keyup : 
//6 events : we work 




