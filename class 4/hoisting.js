// hoisting in javascript, where variable and functions declaration are moved (hoisted) 
// to the top of the containing scope before the code is executed

// console.log(a); //undefined
// var a = 10;
// console.log(a); //10


//behind the screens
// var a; //variable declaratins are moved to top of the containing scope
// console.log(a);
// a  = 10;
// console.log(a)

// console.log(a)
// let a = 10;
// console.log(a)
// //for let and const accessing before the declaration throws the referenceError



//function declarations

// welcome(); //function calling

// function welcome() { //function declaration
//     console.log("hello")
// }

// the whole function declaration is hoisted, so we can the function before the declaration line


//function expression: if we assign function to a variable is nothing but function expression

// hello()

// function hello() {
//     console.log("hello: named function or function declaration")
// }





//function expression: if we assign the function to a variable called function expression

// venkat(); //not possible in case of function expression, hoisting is not possible

// var venkat = function() {
//     console.log("function expression")
// }



//variable declarations are moved (hoisted) 
// to the top of the containing scope before the code is executed
// var a;
// console.log(a); //undefined
// a = 10;
// console.log(a); //10


//1) function declartion or named function
//2) function expression
//3) anonymous function,,,, a function without a name

//fuction expression

// var venkat = function() {
//     console.log("anonymous function")
// }


//function assigned to a variable is called function expresion

//function without the name is anonoymous function

// var stephen = function (a, b) {
//     return a + b;
// }
// console.log(stephen(10, 30))

// or

// var stephen = function add(a, b) {
//     return a + b;
// }
// console.log(stephen(10, 30))



//anonymous function
// var stephen = function (a, b) {
//     return a + b;
// }
// console.log(stephen(10, 30))


//IIFE...immediatley invoked function expression


// (function hi(a, b) {
//     console.log("hi function")
// return a + b
// })(10, 20);



console.log((function naveenth(a, b){
    return a + b
})(10, 20));

