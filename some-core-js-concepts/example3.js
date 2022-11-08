// example3.js
// async/await

function div(a, b) {
  return new Promise(function (ans, err) {
    try {
      if (typeof a !== "number" || typeof a !== "number") {
          return err("operands must be numbers")
      }
        
      if (b === 0) {
        return err("Can not divide by zero")
      }
      
      return ans(a/b)
    
    } catch(error) {
      return err(error.message)
    }
  })
}

async function divFunc(a, b) {

  try {
    const i = await div(a, b)
    console.log(i)

  } catch(error) {
    console.log(error)
  }

}

divFunc(1, 7)
divFunc(1, 3)
divFunc(1, 5)
divFunc(1, 0)
divFunc(1, 3.5)
divFunc(1, 9.025)

