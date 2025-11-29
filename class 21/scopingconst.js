// const is block scope
//redeclaration is not allowed 
//reassignment is not allowed

// block scope
// if(true){
//     const name = "rekha";
//     console.log("inside the block", name)
// }
// console.log("outside", name)

// const name = "venkat"; //must be declared and assign the value in the same line


// reassginment is not allowed 
// const value = "ramesh";
// // value = "venkat"; //this is not allowed
// const value = "venkat"// redeclaration is also not allowed
// console.log(value)
   
// var password = "welcome12345"; //global scope

function something() {

    password = "welcome12345"; //function scope
    console.log(password)

}
something();
console.log(password)

