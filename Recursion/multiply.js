
function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];

    }
    return product;
}
console.log(multiply([1, 2, 3, 4]))


function Multipy(ary) {
    if (ary <= 0) {
        return 1;
    } else {
return ary[ary.length-1]*multiply(0,ary.length-1)
    }
}
console.log(multiply([2,3,4,5]))