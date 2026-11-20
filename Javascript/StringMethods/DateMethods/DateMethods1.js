let date = new Date();
console.log(date)

console.log(date.getDate()) //17
console.log(date.getDay()) //2 -- it starts with 0 index such as sun -0 mon -1 tue- 2
console.log(date.getFullYear()) //2026
console.log(date.getHours()) //9
console.log(date.getMilliseconds()) //778
console.log(date.getMinutes()) //9
console.log(date.getMonth()) //10 //its start with 0 indext for example jan -0 feb - 1 like that nov - 10
console.log(date.getSeconds()) //51

//set 
// date.setDate(20)
// console.log(date) //Fri Nov 20 2026 09:34:04 GMT+0530 (India Standard Time)
//  date.setMonth(12)
//  console.log(date) //Wed Jan 20 2027 09:35:19 GMT+0530 (India Standard Time)


 let btn = document.getElementById("btn")
 let age = document.getElementById("age")

 function calculateAge(){
  let birthYear = parseInt(prompt("Enter your Birth Year"))
  console.log(birthYear)

  age.innerHTML = `your age : ${date.getFullYear() - birthYear}`
 }

 btn.addEventListener("click", calculateAge)