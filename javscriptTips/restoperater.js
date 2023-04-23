const emp = {
    id: 1,
    name: "Gagan",
    sal: 45000
}
const { sal, ...nemp } = emp;
const { name, ...m } = emp;

//const emm={sal,..emp};
console.log(nemp)
console.log(m)