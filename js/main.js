const firstDivision = document.getElementById('first');

var addNew = function () {
    firstDivision.className = 'dark';
    // firstDivision.classList.add('alert-primary');
    // firstDivision.classList.remove('alert-danger');
    // console.log(firstDivision.classList.contains('alert'))
    // firstDivision.classList.toggle('alert-primary');
    // console.log(firstDivision.classList.item(0))
}

////////////////////////////////////////
var parent = document.querySelector('#parent');

console.log(parent.children)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)


console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.lastChild)



console.log(first.nextElementSibling)
console.log(parent.previousElementSibling)

///////////////////////////////
const parent2 = document.createElement('div');
const child = document.createElement('p');
const childTwo = document.createElement('p');


// parent2.append(child, childTwo, 'Hello world'); // Works fine
parent2.appendChild(child, childTwo, 'Hello world');

console.log(parent2)

/**************************************/

const myBtn = document.getElementById('my_btn');

// myBtn.onclick = function () {
//     console.log("I am here")
// }

// myBtn.onclick = function () {
//     console.log("I am here 2")
// }

myBtn.addEventListener('click', function () {
    console.log("I am here again")
})

// click - dblclick - contextmenu 

// myBtn.addEventListener('contextmenu', function () {
//     console.log("I am here again 2")
// })



function myFunction(e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    console.log(coor)
}


// This keyword & e
const myForm = document.forms[0]
myForm.addEventListener('submit',  (event) => {
    console.log(myForm.children[0])
    console.log(myForm.children.username)
    console.log(document.getElementsByName('username')[0])
    console.log(document.getElementsByName('username')[0])
    console.log("*********************")
    // if()
    event.preventDefault();
    console.log(event)
    console.log(this)
})


var myTestFunction = () => console.log(this)




// myTestFunction()