let nums = [10,20,33,23,40,50]
//filter methods 
let value = nums.filter(
  (n) => {
    console.log(n) //[10,20,33,23,40,50]
    return n%2 == 0; //check even or odd
  }
)
console.log(value) //[10, 20, 40, 50]
