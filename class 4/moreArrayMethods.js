//reverse in array.....reverse the original array 

// let numbers = [1, 2, 3, 4, 5];
// let reverNumbers = numbers.reverse()

// console.log(reverNumbers)

// map..creates a new array by applying the function to each element

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// let filterNumbers = doubled.filter(num => num % 3 === 0);
// console.log(filterNumbers); //6
// console.log(numbers); //1 2 3 4 5
// console.log(doubled); //[ 2, 4, 6, 8, 10 ]

//sort

// let mobiles = ["iphone", "oppo", "vivo", "samsung", "BPL"];

// mobiles.sort();
// console.log(mobiles)

// let numbers = [3, 1, 5, 6, 2, 4, 10, 20, 30, 40, 50, 60, 100];
// numbers.sort();
// console.log(numbers)

//compare method...

// let numbers = [3, 1, 5, 6, 2, 4, 10, 20, 30, 40, 50, 60, 100];
// numbers.sort((a, b) => a - b); //ascending order
// // numbers.sort((a, b) => b - a); //descending order
// console.log(numbers)


//compareFunction(a, b)....

// negative: a comes before b
// positive : b comes before a
// 0 keep the same order


// let numbers = [1, 10, 2, 3, 30, 20];
// numbers.sort((a, b) => a - b); //ascending order
// console.log(numbers)

//if a - b < 0, place a before b
// if a - b > 0, place b before a
//if a - b == 0; keep them as it is


//length...

let numbers = [1, 10, 2, 3, 30, 20]; // 0, 1, 2, 3, 4, 5
console.log(numbers.length); //6