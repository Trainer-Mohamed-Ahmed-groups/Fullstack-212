export default function User(name, age) {
    this.name = name;
    this.age = age;
}


export function Pen(color, price) {
    this.color = color;
    this.price = price;
}
export var myName = "Mohamed Ahmed"


export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export class Doctor extends Person {
    constructor(name, age, specialty) {
        super(name, age);
        this.specialty = specialty
    }
}


