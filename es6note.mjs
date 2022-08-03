// https://dev.to/hardy613/notes-on-ecmascript-6-es6-267l

// Introduction

// var and let

// var is function scoped
function varFun() {
    if (true) {
        var bVal = true
    }

    console.log(bVal)
}

// let is block scoped
function letFun() {
    if (true) {
        let bVal = true
    }

    console.log(bVal)
}

varFun()
// letFun() // ReferenceError: bVal is not defined

// let would also allow the use of variable names inside and outside a block
// this is know variable shadowing
function letScopeFunc() {
    let name = "John"

    if (true) {
        let name = "Doe"
        console.log("name in if: " + name)
    }

    console.log("name in fun: " + name)
}

letScopeFunc()

console.log()


// const keyword
// const is block scoped just like let but makes the data immutable
const version = '0.0.1';

// version = '0.0.2' // TypeError: Assignment to constant variable.

var name = 'd'
var name = 'daniel'  // this will work
console.log(name)

let age = 23
// let age = 18 // SyntaxError: Identifier 'age' has already been declared
console.log()


// ES6 for/of
const arr = [1, 2, 3, 4, 5]

for (i of arr) {
    console.log(i)
}
console.log()


// es6 template literals - `${placeholder}`
for (i of arr) {
    console.log(`${i} * 3 = ${i * 3}`)
}
console.log()


// ES6 Arrow Functions
let add1 = function (n) {
    return n + 1
}

console.log(add1(3))

let add1_ = (n) => n + 1
console.log(add1_(3))
console.log()


// ES6 Destructuring Assignment
// this is also known as unpacking
let numList = [1, 2, 3]
let [num1, num2, num3] = numList
console.log(num1 + " - " + num2 + " - " + num3)

let book = {
    title: 'Dan Coder book',
    numPgs: 100,
    author: 'Fanumi G'
}

let { title, numPgs, author } = book

console.log(`Details: ${title}, written by ${author} has ${numPgs} pages`)
console.log()


// ..., I will use this like an array and its size
let dataBank = [5, 'Daniel', 'Potato', 'tomato', 'pizza', 'sponge bob sp']
let [size, ...data] = dataBank
// the first element represents the size of the array

for (var i = 0; i < size; i++) {
    console.log(data[i])
}

console.log()


// Default values
function add2(n = 0) {
    return n + 2
}

console.log("No arg: " + add2())
console.log("Arg (2): " + add2(2))

let fullName = function ({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

let fullNameData = { firstName: "John", lastName: "Doe" }

console.log(fullName(fullNameData))
console.log()


// ES6 Classes - just another way to do things

// expression and instance
let SomeClass = class { }

let instanceOfSomeClass = new SomeClass()

// declaration
class AnotherClass { }
let instanceOfAnotherClass = new AnotherClass()

// classes have a constructor
// Getters and Setters - these are just property decorated
// as in they are called as properties instead of function
class PetClass {
    constructor(name, favFood) {
        this.name_ = name
        this.favFood_ = favFood
    }

    // this is not a function
    get petName() {
        return this.name_
    }

    get favFood() {
        return this.favFood_
    }

    set petName(sName) {
        this.name_ = sName
    }

    set favFood(sFavFood) {
        this.favFood_ = sFavFood
    }
}

let proof = new PetClass('proof', 'baked rice with tuna')
console.log(`${proof.petName}'s favourite meal is ${proof.favFood}`)

proof.favFood = "Banku and ground nut stew!! (:"
console.log(`${proof.petName}'s favourite meal is ${proof.favFood}`)

console.log()


// extending the PetClass
// super refers to the parent class, in this case, PetClass
// Before you can use this.property in a constructor of an
// inherited class, you must call super() first.
class Dog extends PetClass {
    constructor(name, favFood, bestFriend) {
        super(name, favFood)
        this.bestFriend_ = bestFriend
    }

    get bestFriend() {
        return this.bestFriend_
    }

    set bestFriend(sBestFriend) {
        this.bestFriend_ = sBestFriend
    }
}

let sharp = new Dog('Sharp', 'snack and sardine', 'phido')
console.log(`${sharp.petName}'s favourite meal is ${sharp.favFood} and loves ${sharp.bestFriend}`)
console.log()


// Methods
// Class methods are functions with the function keyword dropped.
class JavaScript {
    constructor(name, purpose) {
        this.name_ = name
        this.purpose = purpose
    }

    get jsName() {
        return this.name_
    }

    get jsPurpose() {
        return this.purpose
    }

    set jsName(name) {
        this.name_ = name
    }

    set jsPurpose(purpose) {
        this.purpose = purpose
    }

    // methods are created without the function keyword
    sayHello() {
        let returnVal = `This is some kind of javascript called, ${this.jsName}\n`
        returnVal += `${this.jsName} is used for ${this.purpose}`
        return returnVal
    }

}

const lang = new JavaScript('RubberScript', 'cocktailing code')
console.log(lang.sayHello())
console.log()


// ES6 modules
// ES6 modules use the import and export keywords and are intended to be used
// with the browser or with a server environment like NodeJs

// create utils.mjs
import { add, times } from './utils.mjs'

console.log(add(2, 3))
console.log(times(2, 3))

import { div as divide, mod as remainder } from './utils.mjs'
console.log(divide(2, 3))
console.log(remainder(2, 3))
console.log();
