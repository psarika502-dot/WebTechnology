let arr = [10,12,13,9,100]
 let check = arr.some((ele) => ele > 13)
 console.log(`In some output: ${check}`)
 console.log(arr)

 let arr1 = [10,12,13,9,100]
 let check1 = arr.every((ele) => ele > 13)
 console.log(`In every output: ${check1}`)

 let arr2 = [100,12,53,9,100]
 let check2 = arr.every((ele) => ele > 1)
 console.log(`In every output: ${check2}`)

//  let string = ["Hello","hii",22,34,455,"bye"]
//  let stringCheck = string.some((ele) => ele.slice(1))
//  console.log(stringCheck)

let arr3 = [10,12,13,9,100]
 let even = arr.some((ele) => ele%2==0)
 console.log(`In every sum output: ${even}`) //true

 let arr4 = [10,12,13,9,100]
 let checkEven = arr.every((ele) => ele%2==0)
 console.log(`In every sum output: ${checkEven}`) //false