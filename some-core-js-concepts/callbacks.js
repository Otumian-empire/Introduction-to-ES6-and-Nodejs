function add2Numbers(a, b, err, res) {
  if (a === null || b === null)
    err("Parameters must be numbers")
  
  if (typeof a === 'string' || typeof b == 'string')
    err("Parameters must be numbers")

  res(a + b)
}

function incrementBy1(a, err, res) {
  if (a === null || typeof a === 'string')
    err("Parameters must be numbers")

  res(a + 1)
}

add2Numbers(2, 3,
  err => console.log(err),
  res => {
    incrementBy1(res,
      ierr => console.log(ierr),
      ires => console.log(ires))
  })
