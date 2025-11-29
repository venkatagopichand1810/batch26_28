// in js there three ways that we can declare the variable 

// var is the old way of declaring the variables (before es6)

// var name = "venkat";
// console.log(name)

// function scope
var name = "rekha"; //global scope

function welcome() {
    var name = "Venkat"; //function scope
    console.log("inside the function:", name)

}

welcome();
console.log("outside the function:", name)


// var is not having block scope {}

if(true){
    var name = "sandhiya";
    console.log("inside the if condition", name); //allowed
}

 console.log("outside the if condition", name); //allowed


// redeclariong is allowed in var, same variable name is allowed w r t var

var name = "ramesh";
var name = "gowtham"; //latest will be output
console.log("name is:", name)


// reassignnment allowed
var name = "shlipa";
name = "su from so"; //reassginment is allowed
console.log(name)
// var name;
// console.log(name)
//  name = "venkat";
//  console.log(name)
var name;
console.log(name)


// hositing...by default javascript will move the variable declartion to the top of the containing scope

var value = "venkat";
console.log(value);

var value = 123;
console.log(value);

var value = true;
console.log(value)