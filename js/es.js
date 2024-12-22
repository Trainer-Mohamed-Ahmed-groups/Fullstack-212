var people = ["Mohamed", "Mahmoud", "Ignored", "Omar", 85];

// var personOne = people[0]
// var personTwo = people[1]
// var personThree = people[2]

var [personOne, personTwo, , personThree] = people

console.log(personOne)
console.log(personTwo)
console.log(personThree)

console.log([...people, "test"])

console.log("****************")

var person = {
    name: "Mohamed",
    age: 25,
    occupation: "Software Engineer"
}

// var personName = person.name,
//     personAge = person.age,
//     personOccupation = person.occupation;

var { name, age } = person

console.log(name)
console.log(age)
// console.log(occupation)



const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

var yearMonths = [...q1, ...q2, ...q3, ...q4]
console.log(yearMonths)


const personData = { fname: "John", lname: "Doe", age: 25 };

// console.log(personData["fname"])

for (let x in personData) {
    console.log(personData[x])
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
    console.log(x)
}