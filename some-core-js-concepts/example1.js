// example1.js
// callbacks

function div(a, b, err, ans) {
  if (b === 0) {
    return err("Can not divide by zero")
  }

  return ans(a/b)
}


// console.log(div(1, 2, (error) => error, (ans) => ans))
// console.log(div(1, 0, (error) => error, (ans) => ans))


// div(1, 2, (error) => console.log("Err: " + error), (ans) => console.log("1 / 2 = " + ans))

/*
function divDebug(a, b) {
  div(a, b, (error) => console.log("Err: " + error), (ans) => console.log(`${a} / ${b} = ${ans}`))
}


divDebug(1,2)
divDebug(1,0)
*/

/*
try {
  result = div(1, 2, 
    (error) => { throw new Error(error) }), 
    (ans) =>ans)
    console.log(result)
} catch(error) {
  console.log(error.message)
}
*/

/*
try {
  result = div(1, 0, 
    (error) => { throw new Error(error) }, 
    (ans) => ans )
    console.log(result)
} catch(error) {
    console.log(error.message)
}
*/

/*
function divFunc(a, b) {
  try {
    result = div(a, b, 
      (error) => { throw new Error(error) }, 
      (ans) => ans )
      console.log(result)
  } catch(error) {
    console.log(error.message)
  }
}

divFunc(1, 3)
divFunc(1, 5)
divFunc(1, 0)
divFunc(1, 3.5)
divFunc(1, 9.025)
*/


/*
// not handling the error will pass the result to the result variable just like in
// switch cases if there is no break
try {
  result = div(1, 0, 
    (error) => { }, 
    (ans) => ans )
    console.log("Ans " + result)
} catch(error) {
  console.log("Error " + error.message)
}

*/













