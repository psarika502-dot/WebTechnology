//1. By literals
//syntax: let identifier = []

//single value
let Name = "sarikha"
console.log(Name)

//mutliple value
let Names = ["sarikha","sakshi","teju","harshal","malhar","sahil"]
console.log(Names)

//accessig single value with index
console.log(Names[2])

let festival = ["Dasara","Diwali","Padhava","Bailpola","Nagapanchami","Rakshabandhan"]
console.log(festival)
console.log(festival[3]) //bailpola
console.log(festival[10]) //undefined -> because we can added the value in ndex 10 that's why it will show undefined
festival[7] = "Ganesh chaturthi"
console.log(festival)
festival[10]="Holi"
console.log(festival) //please check the output -> diffent

//2 way to create array -> BY new constructor
let food = new Array("idli","dosa","modak","puran poli")
console.log(food)

let nums = new Array(1,3,5,334)
console.log(nums)

let place = new Array("pune")
console.log(place)

//3 way to create array -> By declaring size
let size = new Array(106)
console.log(size)
 size[3] = "sarikha"
 size[45] = "sakshi"
 size[55] = "teju"
 size[40] = "pooja"
 size[100] = "devu"
 size[105] = "durga"
 console.log(size)
 size[120] = "anita"
 console.log(size) //in js array is a dynamic array -> is not fixed -> we can change or added 


 