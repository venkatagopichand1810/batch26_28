//  if else

//if...else statment is used to execute a block of code based up on the condition, true...false

// if(if market is open) {
//  i will purchase
// } else {
//     i will not purchase
// }

// if...check the condition 
// if the condition is true, the code inside the if block runs
// if the condition is false, the code inside th elese block runs


// let age = 16;

// if(age > 18)
// { //if true statemenet
//     console.log("you are eligible to vote")
// }
//  else { //this will execute
//     console.log("you are not eligible to vote")
// }

// if else if else

// let score = 40;
// if (score >= 90) {
//     console.log("Grade: A")
// } else if (score >= 75) {
//     console.log("Grade: B")
// } else if (score >= 50) {
//     console.log("Grade: C")
// } else {
//     console.log("Grade: F")
// }


// nestef if statements

let temperature = 30;
let weather = "10";

if (temperature > 50) {
    if (weather === "rainy") {
        console.log("its warm and sunny")
    } else {
        console.log("not sunny")
    }
} else {
    console.log("nothing")
}


//check the login and use role

let isLoggedIn = false;
let userRole = "admin";

if(isLoggedIn) {
    if(userRole === "admin") {
        console.log("welcome, Admin")
    } else if(userRole === "Manager"){
         console.log("welcome, Manager")
    } else {
        console.log("Welcome, User")
    }
} else {
    console.log("Please log in to continue")
}