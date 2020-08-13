// use babel to compile es6 to es5 which is compatible across browsers
// let, const and var
// let and var are the same in the global scope
// classes and inheritance
// default parameters, destructuring and spread

/*
// set

let nums = [1,2,3,2,3,1,2]
let newNums = new Set(nums)
// console.log(newNums)
console.log(`${nums} has a length of ${nums.length}`)
// console.log(newNums + ' has a length of ' + newNums.size)

newNums.add('I am a new item')
newNums.add({'name': 'Derrick', 'age': 34})
console.log(newNums)

//newNums.delete(2)
//console.log(newNums)

//newNums.clear()
//console.log(newNums)

newNums.forEach(num => console.log(num))

*/

/*
// map
// create a new Map
let numMap = new Map([
    ['name', 'Daniel Cormier'],
    ['isChamp', 'Hell yeah'],
    ['isFat', 'Well, yeah']
])
console.log(numMap)

// add item to Map
numMap.set('foughtJones', 'Hell he did')
numMap.set('wasPissed', 'Yeah, Jones pissed him off')
console.log(numMap)

// delete item from Map
numMap.delete('wasPissed')
console.log(numMap)

// size of Map
console.log("Map has a size of " + numMap.size)
*/

/*
// WeakSet and WeakMap - has to do with objects

let animalWeakSet = new WeakSet()
console.log(animalWeakSet)

let micAnimal = {
    name: 'Mr mic',
    age: 23,
    weight: 120
}

animalWeakSet.add(micAnimal)
console.log(animalWeakSet)

let plentyAnimal = {
    name: 'Sean Plenty',
    age: 17,
    weight: 350
}

animalWeakSet.add(plentyAnimal)
console.log(animalWeakSet)

// deleted
animalWeakSet.delete(micAnimal)
console.log(animalWeakSet)
*/

// arrow functions

/*
// promises
// immediately resolved promise
//var myPromise = Promise.resolve('foo')
//myPromise
//    .then(res => console.log(res))
//    .catch(err=> console.log(err))

//var prom = new Promise(function(resolve, reject) {
//    setTimeout(() => resolve(4), 2000)
//})

//prom.then(res => {
//    res += 3
//    console.log(res)
//})


function getData(method, url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open(method, url);
        
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        };
        
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        };
        
        xhr.send();
        
    })
}


getData('GET', 'http://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(err => console.log(err))
*/

// generators









































