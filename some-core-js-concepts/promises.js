function add2Numbers(a, b) {
  return new Promise(function(resolve, reject) {
    if (a === null || b === null)
      reject("Parameters must be numbers")

    if (typeof a === 'string' || typeof b == 'string')
      reject("Parameters must be numbers")

    resolve(a + b)
  })
}

function incrementBy1(a) {
  return new Promise(function(resolve, reject) {
    if (a === null || typeof a === 'string')
      reject("Parameter must be numbers")

    resolve(a + 1)

  })
}

add2Numbers(2, 3)
  .then(sum => incrementBy1(sum))
  .then(resIncBy1 => console.log(resIncBy1))
  .catch(err => console.log(err))
