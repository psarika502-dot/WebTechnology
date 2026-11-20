//Task = Take one array of number and strinf to perform seven type of operation using the array

let arr = [1,2,"hii",5,"Good","Abc",10,44,30,"Obc"]
//find even
let number = arr.filter(
  (n) =>  n % 2 == 0
  )
console.log(number)

//find odd
let odd = arr.filter(
  (n) => n % 2 != 0 && n > 0
)
console.log(odd)

//separate value
let value = arr.filter(
  (n) => n > 0 || n < 0  
)
console.log(value)

//separate string
let str = arr.filter(
  (n) => n > "A" || n < "Z" 
)
console.log(str)

//find greater number
let s = arr.filter(
  (n) => n >= 40
)
console.log(s)

//find  lasser number
let l = arr.filter(
  (n) => n <= 30
)
console.log(l)

//find equal number
let equal = arr.filter(
  (n) => n == 44
)
console.log(equal)
