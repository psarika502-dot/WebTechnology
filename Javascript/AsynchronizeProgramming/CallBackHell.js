function printUser(name,nextName){
  setTimeout(() => {
    console.log("Hello ", name)
    if(nextName){
      nextName()
    }
  },3000)
}

printUser("Sarikha",() => {
  printUser("Anita", ()=> {
    printUser("Harshu", ()=>{
      printUser("Shweta", () =>{
        printUser("Pallu", ()=>{
          printUser("mukata",()=>{

          })
        })
      })
    })
  })
})

// another timeout and time interval
//its display result after the given second
setTimeout(()=>{
  console.log("hello i am coming")
},4000)

//it will gives the output in 1 , 1second in looping
setInterval(()=> {
  console.log("hello i am also coming")
},3000)