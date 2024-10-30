console.log("Hello Javascript")

// One line comment

/* Multi
    lines 
    comment 
*/


// Variable declaration
var age;

// Initialization OR Assignment
age = 80;

// Usage
console.log(age)


console.log("**********************")

/*********************** Task ***********************/

var x = 10,
    y = 20,
    z = x + y;

console.log(z)

console.log("**********************")


/* \\\\\\\\\\\\\\\\\\\\\\\\\   Primitive datatypes     \\\\\\\\\\\\\\\\\\\\\\\\\*/

/***********************       String         ***********************/

var myCourse = "Web development course",
    academy = "Kimit academy";

console.log(myCourse)

// Concatenation
console.log(myCourse + " by " + academy)

console.log(typeof myCourse)

console.log("**********************")

/***********************       Number         ***********************/

var num1 = 10;

console.log(num1)
console.log(num1 * 120)

console.log(typeof 150)

console.log("**********************")


// var numOne = prompt("Please enter your first number"),
//     numTwo = prompt("Please enter your second number");

// console.log(+numOne)
// console.log(+numTwo)
// console.log(+numOne + +numTwo)

/***********************       Boolean         ***********************/

var isActive = true;

// true OR false

console.log(isActive)
console.log(typeof isActive)

console.log("**********************")


/***********************       undefined         ***********************/

var userStatus;

console.log(userStatus)
console.log(typeof userStatus)

console.log("**********************")

/***********************       null         ***********************/

var myDivision = document.querySelector('div');

console.log(myDivision)
console.log(typeof myDivision)

/*********************** Task2 ***********************

var firstName = prompt("Please enter your first name "),
    lastName = prompt("Please enter your last name "),
    fullName = firstName + "  " + lastName;

console.log("Hello " + fullName)
*/


/* \\\\\\\\\\\\\\\\\\\\\\\\\   Non primitive datatypes     \\\\\\\\\\\\\\\\\\\\\\\\\*/

/***********************       Object         ***********************/

// Object = {key (property name) : value }
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    sold: false,
    price: undefined,
    owner: null
}

console.log(car)

// Bracket notation 
console.log(car["brand"])
console.log(car['color'])

// Dot notation 
console.log(car.model)
console.log(car.year)
console.log(car.test)
console.log(typeof car)
console.log(typeof car.year)

/***********************       Function         ***********************/


// ||||||||||||||||||||| Returning value function

function add() {
    return 5 + 5;
}

var add2 = function () {
    return 8 * 8
}

console.log(add())
console.log(add2())

// ||||||||||||||||||||| Void function

function greet() {
    console.log("Hello")
}

var greet2 = function () {
    console.log("Hello 2")
}

greet()

greet2()