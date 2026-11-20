let std = {
  //key : values -> properties
  sName : "sarikha",
  isMarried : false,
  //storing an array
  hobbies : ["Video Game","Anime"],
  scolarship : 2000,
  age : Symbol(19)
}

let std2 ={
  sName : "Vaishu",
  isMarried : true,
  hobbier :["Drawing","Dancing"],
  scolarship : 2000,
  age :Symbol(19)
}

console.log(std)
console.log(std2)

//accesing the objects properties-> dot notation with value
console.log(std.sName) //sarikha
console.log(std2.sName) //Vaishu


//true -> because we store with number dataype
console.log(std.scolarship == std2.scolarship) //true


//false -> because we stored with symbol dataype
//symbol() -> it is a primitive object datatype which stores the same values uniquely
console.log(std.age == std2.age) //false

//triple equals or strictly equals
let value = 26
let value2 = "26"


//double equals to only compare the values
console.log(value == value2) //true

//triple equals to comapare the dataype as well as value
console.log(value === value2) //false

let emp = {
  Name : "Vijay",
  salary : 20000,
  hobbies : ["cricket","cooking"],
  //nested object
  address : {
    place : "Madurai",
    state : "Tamilnadu"
}
}

//accesing object properties
console.log(emp.address.place) //Madurai
console.log(emp.address.state) //Tamilnadu

//updating the object properties
emp.salary = 30000;
emp.address.place = "pune"
console.log(emp) //{Name: 'Vijay', salary: 30000, hobbies: Array(2), address: {…}} -> update the place

//deleting the object properies with delete keyword
delete emp.address.state 
console.log(emp) //{Name: 'Vijay', salary: 30000, hobbies: Array(2), address: {…}} -> delete the state


//adding new key value pair data (property)
emp.subjet = "SQL"
console.log(emp) //{Name: 'Vijay', salary: 30000, hobbies: Array(2), address: {…}, subjet: 'SQL'}

