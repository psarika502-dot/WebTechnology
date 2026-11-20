// let img = document.createElement("img")
// document.body.appendChild(img)

//absolute path
// img.src ("","")


let img = document.createElement("img")
console.log(img)

img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gnChLTHYTMG0IxNOPq5CeMa0dmWKT-kC2EFHACXhrFN6cO6rDto_M9FQ&s=10")

img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCdlZ-P9IeZmDj9DbMSjZNBBGUUfDVv3a5932HRr70Q&s=10"
img.setAttribute("Alt","image")
img.style.width = "200px"

// img.removeAttribute("src")
console.log(img.hasAttribute("src"));
document.body.appendChild(img)


