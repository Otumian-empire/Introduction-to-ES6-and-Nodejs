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

// there is a simple way to write this
// add2Numbers(2, 3)
//   .then(sumOf2Numbers => {
//     incrementBy1(sumOf2Numbers)
//       .then(res => console.log(res))
//       .catch(ierr => console.log(ierr))
//   })
//   .catch(err => console.log(err))

//chained then
// add2Numbers(2, 1)
//   .then(resOfAdd2Numbers => incrementBy1(resOfAdd2Numbers))
//   .then(resIncrementBy1 => console.log(resIncrementBy1))
//   .catch(err => console.log(err))


// using async and await
// tells the code to wait before the awaited code finishes
// async function add2NumbersAndIncrementResultBy1(a, b) {
//   const resOfAdd2Numbers = await add2Numbers(a, b)
//   const resIncrementBy1 = await incrementBy1(resOfAdd2Numbers)
//   return resIncrementBy1
//   // this will return a promise thus care to handle it
//   // console.log(resIncrementBy1)
//   // logging it will return the reolve part of the code
// }

// assuming we console.logged the resolve but wish to catch errors
// we put the logic in a try and catch block
// the code in the catch block will be log/return the reject part of the Promises

async function add2NumbersAndIncrementResultBy1(a, b) {
  try {
    const resOfAdd2Numbers = await add2Numbers(a, b)
    const resIncrementBy1 = await incrementBy1(resOfAdd2Numbers)
    console.log(resIncrementBy1)
  } catch(err) {
    console.log(err)
  }

  // this will return a promise thus care to handle it
  // console.log(resIncrementBy1)
  // logging it will return the reolve part of the code
}

// add2NumbersAndIncrementResultBy1(2, 3)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))


add2NumbersAndIncrementResultBy1(2, 3)
