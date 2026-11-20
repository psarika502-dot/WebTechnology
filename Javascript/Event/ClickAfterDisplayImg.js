let add = document.getElementById("add")
add.addEventListener("click", () =>{
  let img = document.createElement("img")
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8Uf-ngQajRU2yDwofvDXCv5OFfk80CLbHPKG6SE27w&s=10"
  document.body.appendChild(img)
  img.style.width = "400px"

  document.getElementById("replace").addEventListener("click", () => {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xWSkkk-XOIOKvhV1kJZl_x3ONPHNXmjM3ENH_M2agA&s=10"
  })

  document.getElementById("replace1").addEventListener("click", () => {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupTZLQEhHZKamCqwm4TMnkX7rBpAxJEJrKFgtlkqU9Q&s=10 "
  })

  document.getElementById("remove").addEventListener("dblclick", () =>{
    img.remove()
  })
})