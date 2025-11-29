// function in javascript...

//a function is a block of reusable code that performs a specific task. We can define it once and we will call whenever we needed



// function functionName() {
//}


// function welcome() { //definition
//     console.log("welcome guys")
//     console.log("welcome sirrr")
//     console.log(10 + 20);
//     console.log(10 + 500)
// }

// welcome(); //function call


//invoke or call the function using the function with ()


// named function or function declaration


// function isAdult(age) {
//     return age >= 18; //returns this value and it will stop the execution

// }

// console.log(isAdult(18));
// console.log(isAdult(16))
// console.log(isAdult(10))
// console.log(isAdult(28))

// return statement is used to send back a result from the function to where it was called;
//without return, function will not give back a result



// function isEven(number){
   
//     return number %2 === 0; //return in javascript is the keyword or statement to retrun the value
//     console.log("something")
//     console.log("dfdfldklfdjfk")


// }

// console.log(isEven(10));


// add numbers

// function addNumbers(a, b) { //function
//     console.log("the sum is", a + b ); //statement

// }

// addNumbers(10, 20); 
// addNumbers(10, 40)


// function checkPass(marks){
//     if(marks >=35){
//        return "you passed"
//     } else {
//        return "failed"
//     }

// }

// console.log(checkPass(40))


function studentResult(marks) {
    // inner function to check if the passed
    function isPassed() {
        return marks >=35 //true
    }
    //inner function to know the grade of the student
    function getGrade(){

        if(marks >= 90){
            return "A"
        } else if(marks >=75){
            return "B"
        } else if(marks >= 50){
            return "C"
        } else {
            return "D"
        }
    }

    // final output
    if(isPassed()) { //true
        return `passed with grade: ${getGrade()}` //B
    } else {
        return "failed"
    }

}

console.log(studentResult(88))


//closures..if we wanted to access the inner funtion even outer function is closed closures...5***
// function outer(){ //outer
//     function inner() { //inner function 
//         return "venkat inner  function"
//     }

//     return inner; //return the inner function 
// }

// const result = outer(); //closure ....hold the inner function
// console.log(result())

// function factorial(n) {

//     let result = 1;
//     //loop from 1 to n
//     for(let i = 1; i<=n; i++){
//         result = result * i
//     }
//     return result
// }
// let number = 5;
// console.log("factorial value is ", number, "is", factorial(number))