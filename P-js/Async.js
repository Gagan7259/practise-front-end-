let a = [1, 2, 3, 4, [5, 6, 7, [9, 10, 11]]]

function flatten(a) {
  let newArray = []
  for ( let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      let c = flatten(a[i])
      newArray = newArray.concat(c)
    } else{
        newArray.push(a[i]);
    }
  }
  return newArray
}

console.log(flatten(a))
