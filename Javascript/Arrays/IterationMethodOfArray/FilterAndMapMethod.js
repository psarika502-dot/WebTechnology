let names =["vaishanvi", "Dhanashri", "heer", "kranti", "tejaswi", "vaishanvi"]

//method 1
function printI(ele){
  console.log(ele)
  return ele.endsWith("i")
}
let iNames = names.filter(printI)
console.log(iNames) // ['vaishanvi', 'Dhanashri', 'kranti', 'tejaswi', 'vaishanvi'] -> ends with i

//method2
let iNames2 = iNames.filter((ele) => {
  return ele.includes("v")
}
)
console.log(iNames2) // ['vaishanvi', 'vaishanvi'] -> starts with v

//method 3
let iNames3 = iNames.filter((ele) => ele.startsWith("k"))
 console.log(iNames3) //['kranti'] -> present in iNames of k 

 //map -> it is arrray iteration method which is used to pass condition an each and every array element ang given result to every array element .

 let nums =[10, 20, 45, 18, 83]

 let plus = nums.map((ele) => {
  console.log(ele)
  return ele + 10
 })
 console.log(plus) // [20, 30, 55, 28, 93]


 let odd =plus.map((ele) => ele%2 == 0)
 console.log(odd) //[true, true, false, true, false]

 //nums accept three parameter
 nums.map((ele,index, arr)=>{
  console.log(`element = ${ele} , index = ${index} , array = ${arr}`) //element = 10 , index = 0 , array = 10,20,45,18,83
// element = 20 , index = 1 , array = 10,20,45,18,83
//element = 45 , index = 2 , array = 10,20,45,18,83
//element = 18 , index = 3 , array = 10,20,45,18,83
//element = 83 , index = 4 , array = 10,20,45,18,83
 })

 let nums1 =[20,45,90,12,34,67,89]
 let sum = 0;
 nums1.forEach((ele)=> {
  console.log( sum+=ele )// 20, 65, 155, 167, 201, 268, 357
 })

 //reduce -> it will traverse the array and return single value as output. It will take two parameter first is accumulator and second is current value. 
 let newV = nums1.reduce((a,b)=>{
  return a+b 
 })
 console.log(newV) // 357

//reduceRight -> it will traverse the array from right to left and return single value as output. It will take two parameter first is accumulator and second is current value.
 let newV1 = nums1.reduceRight((a,b)=>{
  return a-b
 })
 console.log(newV1) //-179

 let newV2 = nums1.reduce((a,b)=>{
  return a-b
 })
  console.log(newV2) // -317