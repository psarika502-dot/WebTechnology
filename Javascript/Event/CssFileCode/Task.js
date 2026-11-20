let addPic = document.getElementById("addPic")
let pic = document.getElementById("pic")
let addStyle = document.getElementById("addStyle")
let replacePic = document.getElementById("replacePic")
let repStyle = document.getElementById("replaceStyle")

addPic.addEventListener("click", () =>{
  pic.src = "https://i.pinimg.com/736x/b3/01/64/b30164dddb0bd1e0b852957c40b69a54.jpg"
})

addStyle.addEventListener("dblclick", () =>{
  pic.classList.add("style")
})

replacePic.addEventListener("mouseover", () =>{
  pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQu4bqA-JHUQBe5eBLk-xR0jjF9x6gEuMjUtGItWqOUUBTR5Fb1cPxwI&s=10"
})

// repStyle.addEventListener("mouseover", () =>{
//   pic.classList.replace("style","body")
// })


repStyle.addEventListener("click", () =>{
  document.body.classList.toggle("body")
  repStyle.innerHTML = "Replaced"
  repStyle.classList.toggle("changeStyle")
  
})

