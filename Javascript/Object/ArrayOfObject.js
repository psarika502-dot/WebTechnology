//array of object
let emp =[
  {
    Name : "Sarikha",
    City :"akola",
    Gender : "female"
  },
  {
    Name : "Shweta",
    City : "Chandrapur",
    Gender : "female"
  },
  {
    Name : "Harshu",
    City : "Yavatmal",
    Gender : "female"
  },
  {
    Name : "Navneet",
    City : "Amaravti",
    Gender: "male"
  }
]
                                                           
console.log(emp)

let empGender = emp.filter((ele) => {
  return ele.Gender == "female"
})

console.log(empGender)

let empGender2 = emp.filter((ele) => {
  return ele.Gender == "male"
})

console.log(empGender2)