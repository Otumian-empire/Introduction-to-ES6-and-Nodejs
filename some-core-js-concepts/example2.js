// example2.js
// promise

function div(a, b) {
  return new Promise(function (ans, err) {
    if (typeof a !== "number" || typeof a !== "number") {
      return err("operands must be numbers")
    }
      
    if (b === 0) {
      return err("Can not divide by zero")
    }
    
    return ans(a/b)
  })
}

div(1,2).then(a=>console.log(a)).catch(e=>console.log(e))

