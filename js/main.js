// var i = 1;
// function sayOk() {
//     console.log(i)
//     i++
// }

// const myInterval = setInterval(sayOk, 1000)


// function stopInterval() {
//     clearInterval(myInterval)
// }

// function sayOk2() { console.log("Ok 2") }

// const myTimeOut = setTimeout(sayOk2, 5000)

// function stopTimeOut() {
//     clearTimeout(myTimeOut)
// }

/************************** Math  method **************/

console.log(Math.max(12, 45, 78, 451, 15, 78, 8))
console.log(Math.min(1, 45, 78, 451, 15, 78, 8))

console.log(Math.round(5.5))
console.log(Math.ceil(5.1))
console.log(Math.floor(5.9))

console.log(Math.pow(5, 3))
console.log(Math.sqrt(25))
console.log(Math.abs(-5))
console.log(Math.random())
console.log(Math.random() * 10)

console.log(Math.floor(Math.random() * 10))

var employees = ["Mahmoud", "Ali", "Ezzat", "Omar"];

console.log(Math.floor(Math.random() * 3))
console.log(employees[Math.floor(Math.random() * employees.length)])

// .999999 * 3 => 2
// .000001 * 3 => 0


/************************** Number method **************/

console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.isNaN(12 * 15))
console.log(isNaN("N"))
console.log(isFinite(-3 / 0))
console.log(Number.isInteger(12))
console.log(Number.isSafeInteger(Number.MAX_VALUE))

var myNumber = 45.123186;

console.log(myNumber.toFixed(4))
console.log(myNumber.toPrecision(4))
console.log(myNumber.toString())

// var myDate = new Date()


let ms = Date.parse("March 21, 2012");
console.log(ms)