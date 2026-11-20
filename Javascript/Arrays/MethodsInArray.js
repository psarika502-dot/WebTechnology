//slice
let persons = ["Devendra","Kunal","Aakash","Ankita","Shweta","Tanvi","Achal","Sonali"]
console.log(persons)

//separte the boys using a slice
//syntax of slice -> slice(Staring index, ending index+1)

let boys = persons.slice(0,3) //in slice array will not change it will create the new array
console.log( `Boys:  ${boys}`)

let girls = persons.slice(3)
console.log(`Girls: ${girls}`)

//splice()
let places = ["Amravrti", "Akola","Pune","Nanded","nashik","Shegaon","Mumbai"]
console.log(places)

//adding array element to the array -> original array will be changes
places.splice(3,0,"Lonawala")
console.log(places) // ['Amravrti', 'Akola', 'Pune', 'Lonawala', 'Nanded', 'nashik', 'Shegaon', 'Mumbai']

//deleting array
places.splice(4,1)
console.log(places) //['Amravrti', 'Akola', 'Pune', 'Lonawala', 'nashik', 'Shegaon', 'Mumbai']

//replace Array
places.splice(0,7)
console.log(places) //[] -> empty array

//repalce array
places.splice(0,7,"Goa","Maharastra","Tamil Nadu")
console.log(places) //(3) ['Goa', 'Maharastra', 'Tamil Nadu']


let number = [1,2,34]
console.log(number) //[1, 2, 34]

let names = ["Anita","sarikha","shweta"]
console.log(names)// ['Anita', 'sarikha', 'shweta']

names.splice(2,0,number[0])
console.log(names) // ['Anita', 'sarikha', 1, 'shweta']

let food = ["birani","pulav","pavbhaji","Misal","Idly","dosa","pulav"]

console.log(food)

console.log(food.indexOf("Idly")) //4

console.log(food.indexOf("Birani")) //-1 -> not present in array it will  throw the -1 -> it is casesensitive

console.log(food.includes("birani")) //true -> this will check the element is present or not if present it will throw the true

console.log(food.lastIndexOf("pulav"))




