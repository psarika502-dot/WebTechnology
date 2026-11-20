// cretate an 10 array of an object (employees) which includes 
// Name, age, salary, deparment, hobbies, place, eid, company, gender, isMarried
//  1) extract the emp with same age
//  2) extract the emp whose deparment is same
//  3) increase the salary 15% of employees whose having more than 50,000
//  4) extract the married emp
//  5) extract the all male emp and give them 25% of salary hike
//  6) extract the all female emp and deduct thier 25% salary and afterwards increase by 50%
//  7) add the experience key to the all emp based on their salary
//  8) delete all married female emp
//  9) sort the all emp based on their experience
//  10) sort the emp in reverse order based on their ID

let emp = [
  {
    name: "achal",
    age: 22,
    salary: 20000,
    department: "Software Engineer",
    hobbies: ["cricket","dance"],
    place: "Akola",
    eid: 1,
    company: "google",
    gender: "female",
    isMarried: true
  },
  {
    name: "Sarikha",
    age: 23,
    salary: 200000,
    department: "Graduate Engineer",
    hobbies: ["cooking","dance"],
    place: "pune",
    eid: 2,
    company: "TCS",
    gender: "female",
    isMarried: false
  },
  {
    name: "Teju",
    age: 22,
    salary: 10000,
    department: "Java Developer",
    hobbies: ["Travelling","drawing"],
    place: "solapur",
    eid: 3,
    company: "HCL",
    gender: "female",
    isMarried: false
  },
  {
    name: "Aniket",
    age: 50,
    salary: 2000,
    department: "Java Developer",
    hobbies: ["cricket","dance"],
    place: "pune",
    eid: 4,
    company: "google",
    gender: "male",
    isMarried: true
  },
  {
    name: "Nitin",
    age: 11,
    salary: 20000,
    department: "Graduate Engineer",
    hobbies: "travelling",
    place: "Akola",
    eid: 5,
    company: "TCS",
    isMarried: true
  },
  {
    name: "Rohini",
    age: 50,
    salary: 2000,
    department: "Software Engineer",
    hobbies: ["Cooking","dance"],
    place: "Pune",
    eid: 6,
    company: "HCL",
    isMarried: false
  },
  {
    name: "Kunal",
    age: 22,
    salary: 30000,
    department: "Java Developer",
    hobbies: ["Travelling","dance"],
    place: "Solapur",
    eid: 7,
    company: "google",
    isMarried: false
  },
  {
    name: "Saru",
    age: 52,
    salary: 300000,
    department: "SQL Developer",
    hobbies: ["cricket","dance"],
    place: "Mumbai",
    eid: 8,
    company: "google",
    isMarried: true
  },
  {
    name: "Priya",
    age: 50,
    salary: 30000,
    department: "Software  Engineer",
    hobbies: ["cricket","dance"],
    place: "Akola",
    eid: 9,
    company: "google",
    isMarried: true
  },
  {
    name: "Neha",
    age: 22,
    salary: 20000,
    department: "Computer",
    hobbies: ["cricket","dance"],
    place: "Akola",
    eid: 10,
    company: "TCS",
    isMarried: false
  }
 
]
console.log(emp)

////check the age is 50
let empAge22 = emp.filter((ele) => {
  return ele.age == 22
})
// console.log(`age is 22 ${empAge22}`)
console.log(empAge22)

//check the age is 50
let empAge50 = emp.filter((ele) => {
  return ele.age == 50
})
console.log(empAge50)

//check age is 23
let empAge23 = emp.filter((ele) =>{
  return ele.age == 23
})
console.log(empAge23)

//department same
let dept = emp.filter((ele) => {
  return ele.department === "HCL"
})
console.log(dept)
let salary=emp.forEach((ele)=>{
    if(sal>50000){
        sal=sal*1.15
    }
})
console.log(sal);

let married=emp.filter((ele)=>{
    return ele.isMarried===true
})
console.log(married);

let hike=emp.filter((ele)=>{
    if(gender==="male"){
        emp.sal=emp.sal+sal*25/100
    }
    
})
console.log(hike);

let deduct=emp.forEach((ele)=>{
    if(gender==="female"){
        emp.sal=emp.sal-sal*25/100
    }
    
})
console.log(deduct);

delete emp.isMarried
console.log(emp);


console.log(eid.sort());