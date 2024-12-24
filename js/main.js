import User, { Doctor, Pen, Person, myName } from "./User.js";


const fruits = new Map([
    ["apples", 500],
    ["oranges", 200],
    ["bananas", 300],
    ["oranges", 200],
]);


console.log(fruits)
console.log(fruits.get("apples"))
console.log(typeof fruits)



const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("b");

console.log(letters)
console.log(typeof letters)


/////////////////////////////////////////////////

let conditions = false;


const proms = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (conditions) {
            resolve("Hello")
        } else {
            reject("This condition faild")
        }
    }, 2000);
});

console.log("test")

proms.then((result) => {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});
/***********************************************/

var employeeOne = {
    name: "Ali",
    age: 25
}

var employeeTwo = {
    name: "Omar",
    age: 85
}

console.log(employeeOne)



var userOne = new User("Mohamed", 16);

console.log(userOne);
console.log(myName)

var penOne = new Pen("red", 10)

console.log(penOne)

var personOne = new Person("Osamn", 62)

console.log(personOne)

var doctorOne = new Doctor("Ahmed",50,"Chest")

console.log(doctorOne)