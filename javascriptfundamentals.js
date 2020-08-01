// Values that evaluate to true
// an empty array
// an empty object
// any non - zero number
/*
if ('0') {
    console.log("string, '0' evals to true")
}

if ('any string') {
    console.log('any string evals to true')
}

if ([]) {
    console.log('an empty array literal evaluates to true')
}

if ({}) {
    console.log('an empty object literal evaluates to true')
}

if (1) {
    console.log(1 + " evaluates to true")
}

console.log('')

// Values that evaluate to false
// zero, 0, evals to false
// an empty string
// JavaScript ’ s ” not -a - number ” variable
// be careful -- undefined can be redefined !

if (!0) {
    console.log('zero evals to false')
}

if (!'') {
    console.log('\'\' evals to false')
}

if (!NaN) {
    console.log('NaN evals to false')
}

if (!null) {
    console.log('null evals to false')
}

if (undefined) {
    console.log('undefined evals to false')
}

console.log('')
console.log('')

// ternary
var x = (3 > 4) ? 3 : 4
console.log(x)

console.log('')
console.log('')

// fizzBuzz

var numList = [12, 10, 30, 42, 50, 21, 42, 36, 72]

numList.forEach(function(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('fizzBuzz')
    } else if (num % 3) {
        console.log('fizz')
    } else if (num % 5) {
        console.log('fizz')
    }
})

var numDiv3and5 = numList.filter(function(num) {
    if (num % 3 == 0 && num % 5 == 0 ) {
        return true
    }
})
console.log(numDiv3and5)

console.log('')
console.log('')
*/
// --------------------------------------------------------------------- //
var outerObj = {
    myName: 'outer',
    outerFunction: function() {
        // provide a reference to outerObj
        // through innerFunction ’ s closure
        var self = this;
        var innerObj = {
            myName: 'inner',
            innerFunction: function() {
                // logs ’ outer inner ’
                console.log(self.myName, this.myName);
            }
        };
        innerObj.innerFunction();
        console.log(this.myName); // logs ’ outer ’
    }
};
outerObj.outerFunction();

