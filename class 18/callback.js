
// function greet(name, callback){
//     console.log("hello", name)
//     callback()
// }

// function welcome(){ //anoter function
//     console.log("welcome boss")
// }

// greet("venkat", welcome)


function calculate(a, b, arithmetic){ //function
return arithmetic(a, b)
}


function add(a, b){ //function 
    return a + b
}

function substraction(a, b){
    return a - b
}

function muliply(a, b){
    return a * b
}
console.log("addition", calculate(10, 20, add))
console.log("Sub", calculate(10, 20, substraction))

// console.log(add(10, 50))
// console.log(substraction(20, 10))