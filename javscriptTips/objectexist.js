const emp = {
    nmae: "Gagan",
    sal: 35000,
    id: 2
}

const isidExist = "id" in emp;
console.log(isidExist)

const isGender = "gender" in emp;
console.log(isGender)

const nameExist = "name" in emp;
console.log(nameExist)