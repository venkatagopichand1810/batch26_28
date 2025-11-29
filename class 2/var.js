
// var is the keyword

// var name = "venkat";
// console.log(name);

// var value = 10;
// console.log(value);

// var somothervalue = 100 + value;
// console.log(somothervalue); //110


// var newvalue = somothervalue + 1000;
// console.log(newvalue);

// 1. Basic declaration of the var and initialization
// var message = "hello world"; //we are declaring the variable called message, assigning the value "hello world" to this message

// //2) Redeclartion
// var name = "venkat";
// console.log(name)
// var name = "arun";
// console.log(name)
// var name = "ram";
// var name = "john";
// console.log(name); //john
// //in JS, redeclaration is possible when we delcare the variable with var keyword

// 3) Reassignment allowed

// var value = 100; //value = 100
// value = 200; // reassginment, we are reassgining the new value 200
// console.log(value); 


// var something; //declaration
// something = "nothing"; //assignment or init
// something = "something"; //reassignment
// console.log(something)


// var name; 
// name = "venkat"; //we are assigning the "venkat" to variable called "name"
// console.log(name)
// name = "stephen"; //reassginemnt
// console.log(name);
// name = "ram"
// console.log(name)


// var name = "venkat"; // decl + iniit
// name = "rama";
// name = "john"
// console.log(name)


// for var -> no block scope (if we declare the variable inside the block, we can able access it outside the world)


// if(true) {
//     var name = "venkat";
//     console.log(name)
// }
// console.log(name)

// var name = "rama"; //global scope....can be accessible every where 

// function something() { //
//     // var name = "venkat"; //function scope, no block
//     console.log(name); //
//     if(true){
//         console.log("inside if", name)
//     }
//     console.log(name)

// }

// something()
// console.log(name)


// var globalVar = "i am global";

// function checkGlobal() {
//     var localVar = "i am local"
//     console.log(globalVar); //----------
//     console.log(localVar); //possible
//     if(true){
//         console.log("inside if", localVar)
//         console.log("inside if", globalVar)
//     }
// }

// checkGlobal();
// console.log(globalVar); //
// //  console.log(localVar); //not possible


// //global -> can be accessible anywhere
// //


// if(true){
//     var x = 10;
//     console.log(x); //10
//     if(true) {
//         var x = 20;
//         console.log(x); //20
//     }
//     console.log(x); //20
// }


