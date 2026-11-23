let user = document.getElementById("user")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let submit = document.getElementById("submit")
let login = document.getElementById("login")
let result = document.getElementById("result")

submit.addEventListener("click",() => {
  localStorage.setItem("username", user.value)
  localStorage.setItem("email", email.value)
  localStorage.setItem("pass", pass.value)
})

login.addEventListener("click", (event)=> {
  event.preventDefault()
  if(user.value == localStorage.getItem("username") && pass.value === localStorage.getItem("pass")){
    result.innerHTML = "Login Succefully"
    result.style.color = "green"
  }
  else{
    result.innerHTML = "Invalid Credential"
    result.style.color  = "red"
  }
})