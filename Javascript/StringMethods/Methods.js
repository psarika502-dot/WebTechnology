//String mehtods
let content = "Qspiders"
console.log(content)

//it returns the character based on index value
console.log(content.charAt(0)) //Q
console.log(content.charAt(6)) //r
console.log(content.charAt(9)) //empty space return

//it returns the length of given strPing
console.log(content.length) //8

//wheather it checkes the specific character is present or not
console.log(content.includes("r")) //true
console.log(content.includes("R")) //false

console.log(content.startsWith("Q")) //true
console.log(content.startsWith("q")) //false
console.log(content.endsWith("s")) //true

console.log(content.toLowerCase()) //qspiders
console.log(content.toUpperCase()) //QSPIDERS

let faral = " gulab jamun   "
console.log(faral)  //gulab jamun -> space is present
console.log(faral.trim()) //gulab jamun->space is not present
console.log(faral.trimEnd())
console.log(faral.trimStart())

let  sorry = "I Am SorrY"
console.log(sorry.repeat(100)) //this will print 10000 time same content

let tt = "chandu ki chachane chandu ki chachu ko chatni chatayi"
console.log(tt.replace("chandu","dora"))
console.log(tt.replaceAll("chandu","dora"))