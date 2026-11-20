//way of creating object 
// 1 by object literals
let std = {
  Name : "Sarikha",
  Age : 22
}

let std2 = {
  name : "Shweta",
  age :23
}

//methods of object
//keys -> keys methods return the key of respective object
console.log(Object.keys(std)) // ['Name', 'Age']

//valus() -> this method return the value of respective object
console.log(Object.values(std)) // ['Sarikha', 22]

//entries() -> this method returns the both key value data of respective object
console.log(Object.entries(std)) //[Array(2), Array(2)]
 
//in seal is used only the update the values and not added any thing as well as delete
Object.seal(std)
console.log(Object.isSealed(std)) //true -> it will check

delete std.Name 
 console.log(std) //{Name: 'Sarikha', Age: 22}

 std.marks = 35
 console.log(std) //{Name: 'Sarikha', Age: 22}

 std.Age = 66
 console.log(std) //{Name: 'Sarikha', Age: 66}

 //freeze as used to anything not added,deleted and update
 Object.freeze(std) 
 console.log(Object.isFrozen(std)) //true

 std.Name = "Saru"
 console.log(std) //{Name: 'Sarikha', Age: 66}

 let emp = {
  name1 : "saru",
  salary : 2000000,
  address :{
    city : "akola",
    state :"maharastra"
  }
 } 
console.log(emp) //{name1: 'saru', salary: 2000000, address: {…}}

//in is a method or operator used for the key present or not
console.log("salary" in emp) //true

//Assing -> this method is used to add  more number of properties inside object
Object.assign(emp,{
  company : "Google",
  age : 22,
  id :23,
  location: "pune"
}) 
console.log(emp) //{name1: 'saru', salary: 2000000, address: {…}, company: 'Google', age: 22, id: 23, location: 'pune',}
