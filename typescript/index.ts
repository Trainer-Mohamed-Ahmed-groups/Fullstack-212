var myNumber: number = 5

function add(x: number, y: number): string {
    return "You sum is : " + x + y
}

function sayHello(): void {
    console.log("Hello");
}

var concatenation = (x: string | number, y?: string | number): string => "OK =>" + x + y

concatenation("df")


var myName = "Mohamed";

console.log(myName.split(" "))



function myTest(): string | number {
    if (5 > 4) {
        return "This is string"
    }
    else {
        return 50
    }
}


// console.log(myTest().toUpperCase()) // error


var randomData: string[] = ["sdf", "fas"]

var randomData2: string[] | number[] = ["sdf", "fas"]



var randomData3: [string, number, boolean] = ["sdf", 45, true];

var randomData4: (string | number)[] = ["sdf", "fas", 74]

var randomData5: Array<string | number> = ["sdf", "fas", 74]

type Student = { name: string, id: number }

var student: Student = { name: "Osama", id: 1 }
var student2: Student = { name: "Mazen", id: 2 }

// var mySpan:HTMLSpanElement = document.getElementById("test")

// var myBody:HTMLBodyElement = document.body
