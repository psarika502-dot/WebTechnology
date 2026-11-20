let person = {
  Name : "Sarikha",
  salary : 30000,
  place : "pune",
  //we create funtcion inside object
  print : function (){
    console.log(`my name is ${this.Name} i live in ${this.place} my salary is ${this.salary}`)
  }
}

let person2 = {
  Name : "Anita",
  salary : 300000,
  place : "Akot"
}

let person3 = {
  Name : "Shweta",
  salary : 40000,
  place :"Akola"
}

//calling the object using call method
person.print.call(person2)
person.print.call(person3)
person.print.call(person)

//without creating a function inside object 
let emp = {
  EmpName : "Sakshi",
  EmpPlace : "Pune",
  EmpAge : 18
}

let emp2 = {
  EmpName : "Sakshi",
  EmpPlace : "Pune",
  EmpAge : 18
}

function display (){
  console.log(this.EmpName +" " +this.EmpPlace +" "+this.EmpAge)
}

display.call(emp)
display.call(emp2) 

let emp4 = {
  EmpName2 : "Sakshi",
  EmpPlace2 : "Pune",
  EmpAge2 : 18
}

let emp5 = {
  EmpName2 : "Sakshi",
  EmpPlace2 : "Pune",
  EmpAge2 : 18
}

//passing an arguments
function display (company,location){
  console.log(this.EmpName2 +" " +this.EmpPlace2 +" "+this.EmpAge2+" "+company+" "+location)
}

display.call(emp4,"Google","Pune")
display.call(emp5,"HCL","Mumbai")

display.apply(emp4,["microsoft","pune"])
display.apply(emp5,["google","Pune"])

let result = display.bind(emp4)
console.log(result) //ƒ display (company,location){
//   console.log(this.EmpName2 +" " +this.EmpPlace2 +" "+this.EmpAge2+" "+company+" "+location)
// }  -> native

