//arrow functins....shorter syntax
//ex: 1
function addNormal(a, b){
    return a + b
}
// arrow function
const funcArrow = (a, b) => a + b;
console.log(addNormal(10, 20))
console.log(funcArrow(10, 20))

// ex2
function squareNormal(n){
    return n * n;
}

// arrow function
const squareArrow = n => n * n;
console.log(squareNormal(4))
console.log(squareArrow(4))

// ex: 3
const numbers = [1, 2, 3, 4, 5, 6];
//normal way 
const doubleNumbers = numbers.map(function(num) {
    return num * 2
})

// arrow function
const doubleNumbersArrow = numbers.map(num => num * 2)
console.log(doubleNumbers);
console.log(doubleNumbersArrow)