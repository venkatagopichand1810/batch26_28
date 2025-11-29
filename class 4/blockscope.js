//var....no block scoped

// if(true){
//     var name = "venkat"; //var is not block scope
//     console.log(name); 
// }

// console.log(name); //we can able to access



// if(true){
//     let name = "venkat"; //let is block scope
//     console.log(name); 
// }

// console.log(name); //not possible



if(true){
    let name = "venkat"; //const is block scope
    console.log(name); 
}

console.log(name); //not possible