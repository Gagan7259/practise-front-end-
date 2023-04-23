const colors = ["red", "blue", "yellow", "black", "white"]
const employee = {
    id: 1,
    nmae: "Gagan",
    sla: 40000

}
console.log(colors)
console.log(employee)
console.log("*****************************")

const newColor = [...colors]
console.log(newColor)
const newEmployee = { ...employee }
console.log(newEmployee)