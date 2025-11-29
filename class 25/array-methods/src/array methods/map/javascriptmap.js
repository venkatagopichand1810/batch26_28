// map method in javascript create the new array by applying the functions to each element of the exisiting array


const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(num => num * 2)
// [1, 2, 3, 4, 5].map(1 => 1 * 2) = 2
// [1, 2, 3, 4, 5].map(2 => 2 * 2) = 4
// [1, 2, 3, 4, 5].map(3, =>3, * 2) = 6

console.log(double)

