var number = 9
var fact = 1;

function factorial(n) {
    if (n > number) {
        return;
    }
    fact = fact * n;
    n++;
    console.log(fact)
    factorial(n);
}
factorial(1)
console.log(fact)