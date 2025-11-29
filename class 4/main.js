
// scope.,, refers to the current context of execution, accessbility of variables.

// 1) Global scope 

//a variable declared outside of all functions has global scope

// let name = 'venkat'; //global scope

// function greet() {
//     console.log(name)
// }

// greet(); //function call done
// console.log(name)



// 2) function scope 

//varaibles declared inside the function using var, let or const 
// are only accessbile inside that function

// function age() {
//     let age = 25;
//     console.log("age inside the function", age)
// }

// age();
// console.log(age)



// 3) block scope

// let and const is es6
// any var declares inside the block is accessbile only with in that block, it wont access outside

// if(true){
//     let city = "chennai";
//     const pin = 500001;
//     console.log(city, pin)
// }
// console.log(city, pin)


// 4) lexical scope (closure)
//a function remembers the scope in which it was created, even if it's executes that scope


// function outer() {
//     let outVar = "venkat";

//     function inner() {
//         console.log(outVar); //we are trying to access the outvar
//     }
//     return inner; //we have to return the inner function
// }

// const result = outer(); //
// result();




// function add(a, b) {
//     return a + b
// }

// console.log(add(10, 39))

//arrow function 

// const add =  (a, b) =>  a + b


// console.log(add(10, 39))


// function greet(name){
//     return `hello ${name}`
// }
// console.log(greet("venkat"))


// const greet = (name) => `hello ${name}`; //simpler syntax


// console.log(greet("venkat"))


//function to find the even number

//  const isEven = (num) =>  num % 2 === 0


// console.log(isEven(10));
// console.log(isEven(7)); 


//named function or function declaration
// function venkat(){
//     console.log("venkat")
// }

// venkat();

//arrow function

const venkat = () => "venkat"

console.log(venkat());