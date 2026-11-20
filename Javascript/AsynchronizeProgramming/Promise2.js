function printUser(name){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log("Hello "+name)

    if(name){
      resolve("succesfully")
    }
    else{
      reject("failed")
    }
    },1000)
  })
}

// printUser("sarikha").then(()=> printUser("Anita"))
// .then(()=> printUser("Harshu"))
// .then(()=> printUser())
// .then(() => printUser("shweta"))
// .catch(()=> {
//   console.log("Invalid arguments")
// })

//async and await
async function getAllUsers(){
  await printUser("om")
  await printUser("Dhanush")
  await printUser("Mammoty")
  await printUser("Sai")
  setTimeout (async ()=>{
    await printUser("Modi Ji")
  },3000)
  await printUser("Salman")
  await printUser("Rahul")
}

getAllUsers()

