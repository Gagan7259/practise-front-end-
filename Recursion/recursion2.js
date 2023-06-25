function gagan() {
    return manoj();
}

function manoj() {
    return Raki();
}

function Raki() {
    return Sai();
}

function Sai() {
    return Kishore();
}

function Kishore() {
    return true;
}
//console.log(gagan())

function recuriveFunc(person) {
    if (person === 5)
        return true;
    console.log(person)
    return recuriveFunc(person + 1)
}
console.log("Outcome" + ":" + recuriveFunc(1))