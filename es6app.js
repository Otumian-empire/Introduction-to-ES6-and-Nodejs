// this is supposed to be a continuation of es6notes
// using require instead of import/from approach
// create dash.js
// require dash

const dash = require('./dash.js')

console.log(dash.add(2, 3))
console.log(dash.sub(2, 3))

console.log();


// event and event emitter
const events = require('events')
let myEvent = new events.EventEmitter()

myEvent.on('someEvent', function (id) {
    console.log(`SomeEvent(${id}) was emitted`)
})

myEvent.emit('someEvent', 123)
