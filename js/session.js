"use strict";

var username = 'Omar';

switch (username) {

    case 'Ali':
    case 'Mohamed':
        {
            console.log("First or Second")
            break
        }
    case 'Omar':
        console.log("Third")
        break;
    default:
        console.log("Not above")

}
////////////////////////////////////////////////////
// var x = 51;


try {
    console.log(x)
} catch (error) {
    console.log("Mahmoud error : " + error.message)
}
finally {
    console.log("Finally")
}


console.log("Hello")


function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Parameter is not a number"
    }
    else {
        return width * height
    }
}

try {
    console.log(getRectArea(5, "tree"))
} catch (error) {
    console.error(error)
}
///////////////////////////////////////////////////////

// o = 15;

var t = 0;

while (t <= 10) {
    console.log(t)
    t++;
}

console.log("-----------------");

var p = 0;

do {
    console.log(p)
    p++;
} while (p <= 10);

console.log("-----------------");


for (var i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("-----------------");

for (var i = 1; i <= 10; i += 2) {
    // if (i === 5) break;
    if (i === 5) continue;
    console.log(i)
}

console.log("-----------------");

var persons = ["Mohamed", "Ahmed", "Mahmoud", "Omar"];


for (var index = 0; index < persons.length; index++) {
    const element = persons[index];
    console.log(index + 1 + " - " + element)
}

function helloFn() {
    return; "Hello"
}


console.log(helloFn())