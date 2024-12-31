const add = (a, b, c) => a + b + c;

console.log(add(1, 2, 3))

const add2 = function (a) {
    return function (b) {
        return function (c) { return a + b + c }
    }
}

const add3 = (a) => (b) => (c) => a + b + c

console.log(add2(2)(3)(4))
console.log(add3(2)(3)(4))