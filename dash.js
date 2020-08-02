// TODO: export this module
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return add(a, -(b))
}

module.exports = { add, sub }
