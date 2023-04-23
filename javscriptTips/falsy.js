//FALSY values in javascript
// null fasle NaN 0 "" undefined


const numbers = [1, 2, 3, 4, 5, null, false, 0, NaN]
const b = numbers.filter(Boolean)
console.log(b)
console.log("*************************")

const names = ["Gagan", null, "Manoj", 9, 0, 3]
const a = names.filter(Boolean)
console.log(a)

console.log("******************")

const mixdatavalues = [1, 2, 3, "", null, undefined, "Gagan", "Manoj"]
const c = mixdatavalues.filter(Boolean)
console.log(c)