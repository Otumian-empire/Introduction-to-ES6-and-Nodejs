// Javascript array method
const companies = [
    { name: "company one", category: "Finance", start: 1981, end: 2014 },
    { name: "company two", category: "Retail", start: 1982, end: 2004 },
    { name: "company three", category: "Auto", start: 1983, end: 2003 },
    { name: "company four", category: "Tech", start: 1983, end: 2005 },
    { name: "company five", category: "Education", start: 1985, end: 2004 },
    { name: "company six", category: "Health", start: 1986, end: 2004 },
]

const ages = [23, 43, 56, 3, 31, 23, 44, 56, 68, 17]

// lets start with a for loop to see the difference
console.log("looping through companies using for")
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}
console.log()

// forEach - loop through the array
console.log("looping through companies using forEach")
companies.forEach(function (company) {
    console.log(company)
})
console.log()


// filter with for loop
console.log("looping through ages using for")
let tempArr = []

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        tempArr.push(ages[i])
    }
}
console.log(tempArr)
console.log()

// filter
console.log("Filtering ages using the filter method")

tempArr = []
console.log(ages.filter(e => e >= 21))

tempArr = ages.filter(function (age) {
    if (age >= 21) {
        return true
    }
})

console.log(tempArr)
console.log(companies.filter(c => (c.category === "Auto" || c.category === "Tech")))
console.log()


// return a list of company names
console.log("mapping, using for loop")
let someArr = []

for (let i = 0; i < companies.length; i++) {
    someArr.push(`${companies[i].name} [${companies[i].start} - ${companies[i].end}]`)
}
console.log(someArr)
console.log()

// map methods
someArr = []

someArr = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`
})

console.log(someArr)

someArr = ages.map(age => Math.sqrt(age))
console.log(someArr)
console.log()


// sort
// sort works in some weird way, so be more be careful
let normalSortedArray = ages.sort()
console.log(normalSortedArray)

// just calling the sort method will sort the first numbers
// if there is some like 32, 21, 4, output will be 21, 32, 4

// this fixes the above by comparing
console.log("this fixes the above by comparing, using a for loop")
let properlySortedArray = ages.sort(function (num1, num2) {
    if (num1 > num2) {
        return 1
    } else {
        return -1
    }
})

// the above may be reduced
properlySortedArray = ages.sort((a, b) => a > b ? 1 : -1)
console.log(properlySortedArray)

// sorting in desc
let descArray = ages.sort((a, b) => b - a)
console.log(descArray)

// sorting in asc
let ascArray = ages.sort((a, b) => a - b)
console.log(ascArray)
console.log()


// reduce
let arrSum = 0

for (let i = 0; i < ages.length; i++) {
    arrSum += ages[i]
}

console.log(arrSum)

arrSum = ages.reduce(function (total, age) {
    return total + age
}, 0)
console.log("es5", arrSum)

arrSum = ages.reduce((total, age) => total + age, 0)
console.log("es6", arrSum)
console.log()
