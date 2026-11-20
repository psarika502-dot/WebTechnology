// types of function
//named function
function task(){
  console.log("hiii")
}
task()
// anonymous function
// function (){
//   console.log("hiii")
// }

//first class function or fuction with value
let add = function (){
  console.log("hello")
}
add()
console.log(add) //ƒ (){
                    // console.log("hello")
                    // }
//  console.log(Add()) //error

 //scope
 {
  //local scope
 }

 //block scope
 if(true){
  console.log("Sarikha")
 }

 //function scope
 function task3(){
  console.log(place)
 }

 //Nested function
 //lexical scope chain or closure
 //Accessing the parent function property or variable inside child function

 function parent(){
  let place4 = "akola"
  console.log(place4)
  function child(){
    let place5 = "pune"
    console.log(place5)
    var n = 45 
    // parent() -> recursion it will excute upto memory will not full

  }
  // console.log(n) -> we can't used outside the block in function scope
  child()
 }
 parent()  


 // Arrow Function
 //Arrow Function is known for shortr syntax
 //it is introduced in ES6 concept
 //most used JS function in frotend 
//  Syntax -> 
// () => { }

  //below Function first class function with arrow function 
  let TaskArrow = ()=>{
    console.log("hello") 
  } 
  TaskArrow()