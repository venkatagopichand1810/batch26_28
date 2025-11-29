
//at least one element in the array should satisifes the given condition, if yes true else false

// let numbers = [20, 30, 40, 500];
// let bigNum = numbers.some(number => number > 100);
// console.log(bigNum)

// let users = [
//     { name: "venkat", active: false },
//     { name: "bob", active: false },
//     { name: "john", active: false },
//     { name: "shilpa", active: false },
//     { name: "rekha", active: false },
//     { name: "ambrish", active: false },
// ];



// let activeUsers = users.some(user => !user.active || user.name === "something");
// console.log(activeUsers)

// let cartItems = [
//     { name: "mango", price: 50, inStock: true },
//     { name: "Broccoli", price: 100, inStock: true },
//     { name: "banana", price: 30, inStock: false },
// ]

// //check if any product is out of stock 
// let outofStock = cartItems.some(item => item.inStock === false);
// console.log(outofStock)


let users = [
    {name: "venkat", role: "user"},
    {name: "ram", role: "editor"},
    {name: "shiva", role: "admin"},
]

let adminAccess = users.some(user => user.role === "viewer");
console.log(adminAccess)