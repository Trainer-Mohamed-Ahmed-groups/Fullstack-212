var myName = "Mohamed",
    lastName = "Ahmed";


console.log(myName + "  " + lastName)
console.log(`My name is : ${myName}   ${lastName}`)


/*
'' Single colon
"" Double colon
``  Backtick
; semi colon
: colon
{} curly brackets || mustache
[] hard bracket || brackets
() Parentheses
/ Forward slash 
\ back slash  
*/


console.log("first" * 5)
console.log(typeof ("first" * 5))

/***********************       Function         ***********************/


// ||||||||||||||||||||| Returning value function with parameters

function add(x = 0, y = 0) {
    return x + y;
}

console.log(add(59, 41))
console.log(add(559, 741))
console.log(add(25, 15))
console.log(add(25, '15'))
console.log(add(null, 80))


console.log(add(20, 30) * 100)
// ||||||||||||||||||||| Void function

function greet(username) {
    console.log("Hello " + username) // Hello 
}

var greet2 = function () {
    console.log("Hello 2") // Hello 2
}

greet("Ali")

greet2()



/************************ Array  ************************************/
var employees = ["Mohamed", "Mahmoud", "Ali", "Hossam", "Nour"];

console.log(employees) // ["Mohamed", "Mahmoud", "Ali", "Hossam","Nour"]
console.log(employees.length) // 5
console.log(employees[40]) // undefined
console.log(employees[-1]) // undefined
console.log(employees[employees.length - 1]) // Nour
console.log(employees.at(-2)) // Hossam



////////////////////////////////
var myArray = new Array(5)

myArray[0] = "OK"
myArray[1] = "OK"
myArray[2] = "OK"
myArray[2] = "NO"

console.log(myArray)

var test = 5;
console.log(test)

test = 905;
console.log(test)



/************************ If & else  ************************************/
var time = -11;

if (time <= 12 && time >= 0) {
    console.log("Good morning")

    // Nested if
    if (time <= 5) {
        console.log("Sun is not found")
    }
    else {
        console.log("Sun shine")
    }
}
else if (time < 24) {
    console.log("Good evening")
}



/******************* Operators ***********************/

// Unary Arithmetic operators  ++ --

var x = 10;


console.log(x) // 10
x++;
console.log(x) // 11
x++;
console.log(x) // 12
x--;
console.log(x) // 11


console.log("------------------")
var y = 10;

console.log(y++) // 10
console.log(++y) // 12
console.log(--y) // 11
console.log(y++) // 11
console.log(y)   // 12


// Binary Arithmetic operators  +  - * / %

console.log(24 % 4)

/*
var userInput = +prompt("PLease enter your number");

console.log(12 % 2 )

if(userInput % 2 == 0){console.log("This is even number")}
else {console.log("This is odd number")}
console.log(userInput)

*/
var username = "Ali";

if (username == "Mohamed") { console.log("Hello Mohamed") }


var grade = 5;

if (grade != 5) { console.log("Hello grade five") }
else { console.log("Not five") }


var success = true;

if (success !== true) { console.log("Success") }
else { console.log("failed") }


if (false) { console.log("first") }
else { console.log("NO") }

console.log("*******************************")


var t = 50;

t += 5; // 50 = 50 + 5 
console.log(t)


t *= 4
console.log(t) // 220


if (5 > 4 && 9 > 40) {
    console.log("OK")
}

if (5 > 4 || 9 > 15) console.log("Ok 2")


console.log("---------------------------")
console.log(5 && 0 && 9)
console.log("Mahmoud" && "Rofida" && "Ezzat")
console.log(true && true && false && true)
console.log("test" && [] && 8)
console.log("test" && {} && 8)
console.log("test" && null && 8)
console.log("test" && undefined && 8)
console.log("test" && NaN && 8)


// And operator returns first false and last true


console.log(0 || 5 || 9)
console.log(null || 0 || undefined)

// Or operator returns first true and last false