const numbers = [1, 2, 3, 4, 5, 2, 34, 1, 3, 4]
const colrs = ["red", "blue", "yellow", "red", "blue", "BlueF", "yellow"]

const result = [...new Set(numbers)]
console.log(result)

const resu = [...new Set(colrs)]
console.log(resu)