let prom = new Promise((resolve, reject)=>{
  let acceptProposal = false;
  if(acceptProposal){
    resolve("She said YESSSSS!")
  }
  else{
    reject("Better Luck Next Life!")
  }
})

console.log(prom);

prom.then((prom)=>{
  console.log("finally!") //finally! khairrrr! 
})

prom.catch((prom)=>{
  console.log("kashhhh!")
} )

prom.finally((prom)=>{
  console.log("khairrrr!")
})

