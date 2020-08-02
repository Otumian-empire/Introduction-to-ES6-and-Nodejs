// this is supposed to be a continuation of es6notes
// using require instead of import/from approach
// create dash.js
// require dash

const dash = require('./dash.js')

console.log(dash.add(2, 3))
console.log(dash.sub(2, 3))

console.log();


// events and event emitter
// events is a core module in nodejs
const events = require('events')
let myEvent = new events.EventEmitter()

myEvent.on('someEvent', function (id) {
    console.log(`SomeEvent(${id}) was emitted`)
})

myEvent.emit('someEvent', 123)
console.log()


// use util nodule to do something cool
const util = require('util')

var Person = function (name) {
    this.name = name;
}

// make Person inherit the emitter, so any Person instance will have
//  an event attached to it
util.inherits(Person, events.EventEmitter)

var dan = new Person("Daniel")
var pan = new Person("Paniel")
var fan = new Person("Faniel")

var personArray = [dan, pan, fan]

personArray.forEach(function (person) {
    person.on('sayName', function (msg = 'I am a person') {
        console.log(`my name is ${person.name} and ${msg}`)
    })
})

dan.emit('sayName', "I am a person object")
pan.emit('sayName')
fan.emit('sayName', 'I am belly twin fan')
console.log();


// reading and writing into files - using node `fs` core module
const fs = require('fs')

// reads file synchronuously - reads file before any line after 
// this will actually block the code
// this is a binary data as such must be encoded - utf8
const dummyData = fs.readFileSync('dummy.txt', 'utf8')
console.log("This is a dummy data")
console.log("Dummy data: " + dummyData)

// just like readFileSync is blocking, params: path and data
fs.writeFileSync('newdummy.txt', dummyData)
console.log()


// reading and writing data async
// reads file asynchronuously
// this will actually does not block the code
// this is a binary data as such must be encoded - utf8

fs.readFile('./dummy.txt', 'utf8', function (error, data) {
    if (!error) {
        console.log("This is a dummy data read async")
        console.log("Dummy data: " + data)

        // just like readFile
        fs.writeFileSync('newdummy.txt', data)
        console.log('after writing asyc')
    } else {
        console.log(error.toString())
    }
})

console.log("End of all reading and writing")

// delete file
// // fs.unlinkSync()
// fs.unlink('./dummy.txt', function () { })
// fs.unlink('./newdummy.txt', function () { })
console.log();


// creating and removing directories
console.log("create and removing directories")
fs.mkdirSync('public')
console.log('folder created ------------');
fs.rmdirSync('public')
console.log('folder deleted ------------');

// can not remove a non-mempty directry

