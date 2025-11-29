// let and const is the block scope, redeclartion is not possible

// const name = "venkat";
// const name = "rama"
// console.log(name)

// const name = "venkat";
// name = "rama";
// console.log(name)
// // reassginmnet is not possible in 
// const pi = 3.14; // when we have const things which will not future const 

// const name = "venkat"; //declare the variable
// //name = "venkat" //assignment
// console.log(name);


// ******* declaration and assignment for const should happen in the same line
// const value = 200;
// if(true){
//     const value = 100;
//     console.log(value)
// }
// console.log(value)

const number = [1, 2, 3, 4, 5];
// const number = [1, 2, 3, 4, 5, 6]; //not allowed
//  number = [1, 2, 3, 4, 5, 6]; // not allowed

//mutation or modification
// redeclaration, reassginment is not possible in const, modification is possible
number.push(6);

 console.log(number)


 //global scope, local scope/function scope or block scope and lexcial scope
