
// 1) Primtive data types -> will hold single values, immutable memory value be occupied
//2) non primitive data types or refernce data types

// 1) primitive data types

// a) number
//  -> Represents both integer and floating point numbers

// let age = 30;
// let price = 100.99;
// let infinite = Infinity;
// console.log(typeof age, typeof price, typeof infinite)

//all the numeric values including integers, decimals will treat as a number TYPE


// b) string 

//represent the text data
// we can create the string with single quotes ' ' or double quotes " ", template literals

// let name = 'venkat';
// let city = "chennai";

// console.log(typeof name, typeof city)

//c) Boolean

// represents either true or false

// let isStudent = true;
// let isMentor = false;
// console.log(isMentor)
// console.log(isStudent)
// console.log(typeof isMentor, typeof isStudent)

// d) undefined

//a variable that is declared but not assigned a value, undefined

// let data;
// console.log(data)
// console.log(typeof data)

// e) null
//represents the absense of the value

// let something = null;
// console.log(something); //null
// console.log(typeof something); //bug in javascript

// symbol, bigint...not required

// let bigNumber = 3473947384789347893748391n;
// console.log(typeof bigNumber)

// non primitive data types are objects that hold muliples values, they will create the reference memeory (copy of reference)


// 1) object : Object is the collection of key - value pairs 

// let mobile = {
//     name: "iphone", //key: value or property
//     price: 75000,
//     model: "iphone 19",
//     isAvaliable: false
// }

// // accessing the object values or properties
// console.log(mobile.name)
// console.log(mobile.isAvaliable)
// console.log(mobile.model)


// let person = {
//     name: "venkat",
//     age: 29,
//     city: "bangalore",
//     country: "india",
//     address: "silk board"
// }

// console.log(person)
// console.log(person.address) //using the key and with . we can able access the values

// 2) array is an ordered list of values

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers)
// console.log(numbers[2])
// console.log(numbers[4])
// console.log(numbers[5])

// numbers[1] = 25; //
// console.log(numbers)

// array values can be accessed with index, index will start from 0



// let names = ["ram", "john", "venkat", {address: "T-nagar"}, [1, 2], true, 1]; //ram : 0, john: 1, venkat: 2
// console.log(names[2]);
// names[1] = "sita";
// console.log(names)
// console.log(names[3].address)

// ram: 0
// john: 1
// venkat: 2
// address: 3
//true: 4
//1 : 5


// const student = {
//     name: "shilpa",
//     city: "chennai",
//     learning: ["MEAN", "JAVASCIRPT", "MERN"]
// };

// const students = [
//     {name: "venkat", age: 29},
//     {name: "rama", age: 100}
// ]

// console.log(student.learning[1])

// 3) function

// function welcome(){ //function delcartion
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     console.log("4")
// }

// welcome(); //function calling

// // 4) Date, map, set