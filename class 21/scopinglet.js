// let is the block scoped
//redeclartion is not allowed in the same scope
//but reassignment is allowed 

// block scope in let
if(true){
    let name = "sandhiya"; //block scoped
    console.log("inside the if condition", name); //allowed
}

console.log("outside the if condition", name);


function welcome() {
    let name = "Venkat"; 
    console.log("inside the function:", name)

}

welcome();
console.log("outside the function:", name)

// // in let redeclaration is not allowed
let name = "venkat";
//let name = "chandu"; //this is not allowed 
name = "chandu"; //reassginment is allowed
console.log(name)


let value = "venkat";
console.log(value);

let value = 123;
console.log(value);

let value = true;
console.log(value)