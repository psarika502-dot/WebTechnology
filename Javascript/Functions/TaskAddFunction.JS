//this function is hoistics
Task(10,30)//40
//name function declaration
function Task(a, b){
  console.log("Hello to Javascript")
  console.log(a+b)
}
Task(10,20)//30
Task(30,40)//70

//function with or without expected argumnets or parameters
function Task2(v1,v2){
  console.log(v1+v2);
}
Task2(20,30) //50
//Nan (not an number) -> special type of output appears when the parameter supposed to received or accept the interger vlaue it wont
Task2(39) //Nan
Task2(10,true) //11 -> beacuse 10 + 1 = 11 (true value is 1)
Task2(10,false) //10
Task2(10, "10") //1010
Task2(true,true) //2 -> 1+1=1
Task2(10,null) //null -> empty
console.log(typeof NaN) //Number

//named function
function add(msg,name,age){
  //normal concatination but not recommended
  // console.log(mgs+ " my name is " +name+" and Im "+age);
  //template literals or interpolution
  console.log(`${msg } my name is ${name} and Im ${age}`)
}

add("hii","Sarikha",22)
add("good morning", "shweta",23)

//only practice purpose
function BankAccount(name, age){
  console.log(`Holder Name is ${name} age is ${age}`)
}
BankAccount("Sarikha",33)

function balanceUpdate(actualAmount, withdrawAmount){
  actualAmount = actualAmount - withdrawAmount;
  console.log(actualAmount)
}

balanceUpdate(100,50)
balanceUpdate(30000,2000)
balanceUpdate(300) //Nan

