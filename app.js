// app.js
// Introduction to javascript, using nodejs

// datatypes
/* Number, String, Array, Object */

// variables (Number, String)
var number1 = 23
var string1 = "day by day javascript"

console.log("Now number is " + number1)
console.log("and string is " + string1)

number1 = number1 + 3
string1 = string1 + " " + " and way in the sky"

console.log("After the update, number is now " + number1)
console.log("And string is " + string1)


// arrays, var arrayName = []; array literal
var colors = ['blue', 'green', 'slub white'];
colors.push('grey')

console.log(colors)

var numArr = []

numArr[0] = 1000

for (var i = 0; i < 10; i++) {
	numArr.push(i * i);
}

console.log(numArr)

console.log("My favourite colour is " + colors[2] +
	" and my favourite number is " + numArr[2])

// array Object: var arr = new Array(...)
var foo = new Array('black', 'zeria', 'hexa', 'nanase')

console.log(foo)

// array has a property called length, sort, reverse
console.log("The size of \"" + foo + "\" is " + foo.length)
console.log(foo.sort())
console.log(foo.reverse())


// Loops: for, do while, while, foreach
console.log('for loop')
for (var i = 0; i < numArr.length; i++) {
	console.log(numArr[i])
}

var i = numArr.length - 1;

console.log('while loop')

while (i >= 0) {
	console.log(numArr[i])
	i--;
}

i = 0;

colors.forEach(e => console.log(e, e.length))
numArr.forEach(n => console.log(n, n + 2))


// conditionals: if, if else, switch
// ==, <, >, <=, >=, !=, ===, !==
// &&, ||, !
// true, false

var i = 0;

while (true) {
	if (i < numArr.length) {
		console.log(numArr[i])
		i++
	} else {
		break;
	}
}

console.log("2 == 2: " + (2 == 2))
console.log("2 === 2: " + (2 === 2))
console.log('')

console.log("'2' == 2: " + ('2' == 2))
console.log("2 === 2: " + ('2' === 2))
console.log('')

console.log("2 != 2: " + (2 != 2))
console.log("2 !== 2: " + (2 !== 2))
console.log('')

console.log("'2' != 2: " + ('2' != 2))
console.log("2 !== 2: " + ('2' !== 2))
console.log('')

console.log('switch case')

var grade = 'A';

switch (grade) {
	case 'A':
		console.log('A')
		break;
	default:
		console.log("I am not sure what you mean")
		break;
}


// Objects, literal - this is a like json or a dictionary in python
// var obj = {...}; objects have properties and methods, just like a class

var Person = {
	firstName: "Daniel",
	lastName: "Valved",
	DoB: "2nd March, 2000",
	job: "Software Engineer",
	fluency: ['english', 'Ga', 'Maths', 'Python', 'Js'],
	edu: {
		highSch: 'Lambda Academy of Tech Wizards, Witches and Maniacs',
		college: "Dissymmetrical college of electronic\
		and electrical technical and vocational isekai"
	},
	// here, this.attribute == Object.attribute
	// this is a function, as such call with parenthesis
	fullName: function () {
		return this.firstName + " " + Person.lastName
	}

}

console.log('Person')
console.log('------')
console.log('first name: ' + Person['firstName'])
console.log('last name: ' + Person.lastName)
console.log('full name: ' + Person.fullName())
console.log('Date OF Birth: ' + Person.DoB)
console.log('job: ' + Person['job'])
console.log('first fluency: ' + Person.fluency[0])
console.log('HS edu: ' + Person.edu.highSch)
console.log('')

// Object instance
// var obj = new Object()
// obj.attr = val

var Human = new Object()
Human.name = "Daniel Cormier"
Human.YoB = 1900
Human.MoB = "April"
Human.DoB = 1
Human.dateOfBirth = function () {
	return this.DoB + " " + this.MoB + ", " + this.YoB
}

console.log('Human')
console.log('-----')
console.log("Name: " + Human.name)
console.log(Human.dateOfBirth())

console.log('')


// another way is to use the constructor
// function name(parameter list) {
// 		attributes;
//		methods;
// }

function Employee(name, job, salary) {
	// attributes
	this.name = name;
	this.job = job;
	this.salary = salary;

	// methods
	this.profile = function () {
		var p = ''
		p += "Employee Name: " + this.name + "\n"
		p += "Employee Job: " + this.job + "\n"
		p += "Employee Salary: $" + this.salary + "\n"

		return p
	}
}

// create a instance of the object Employee
var emp1 = new Employee('Dennis', 'Software Engineer', 2000)
console.log(emp1.profile())

console.log('')


// Events, Forms - I will skip

