// reduce give the single value...(sum, avg,...)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum)

// [1, 2, 3, 4, 5] => 0 + 1 = 1
 
// => 1 + 2 = 3
// => 3 + 3 = 6
// => 6+ 4 = 10
// => 10 + 5 = 15
