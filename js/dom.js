console.log(window)
console.log(document.head)
console.log(document.body)
console.log(document.characterSet)
document.write('<p>This is from JS</p>')


///////////////////////////
var myDivision = document.getElementById('first'),
    myDivisions = document.getElementsByTagName('div'),
    myTests = document.getElementsByClassName('test'),
    myInput1 = document.getElementsByTagName('input'),
    myInput2 = document.getElementsByName('username')


console.log(myDivision)
console.log(myDivisions)
console.log(myDivisions.first)
console.log(myDivisions)
console.log(myTests)
console.log(myInput1)
console.log(myInput2[0])
console.log("*".repeat(30))

var myDivision2 = document.querySelector('#first'),
    myDivisions2 = document.querySelectorAll('.test'),
    myKimit = document.querySelector('#first').getAttribute('kimit');

console.log(myDivision2)
console.log(myDivisions2)
console.log(myKimit)

function addAttr() {
    if (myDivision2.getAttribute('class')) {
        // myDivision2.setAttribute('frontend', '')
        myDivision2.setAttribute('class', '')
    }
    else {
        myDivision2.setAttribute('class', 'dark')
    }
}


console.log("*".repeat(30))

console.log(myDivision2.outerHTML)
console.log(myDivision2.innerHTML)

// myDivision2.innerHTML = "This is from JS";

console.log(myDivision2.innerText)
console.log(myDivision2.textContent)
// Single threaded language

var output = document.querySelector('#output')
function writeUsername() {
    // console.log(myInput1.username.value)
    output.innerText += " " + myInput1.username.value.toUpperCase();
    myInput1.username.value = ''
    myInput1.username.focus()
}


var last = document.querySelectorAll('#first > span');
console.log(last)
