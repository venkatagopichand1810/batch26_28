// for loop is used to run the block of code repeatedly for the specific number of times.

// for(initialization; condition; increment/decrement) {
//     //code block
// }

//initialization: declare the variable and value...let i =0
//condition: the loop runs as long as the conditio is true... i < 5
//inrement/decrement: updates the loop each time after the loop runs(i++)

// for(i = 0; i < 5; i++){
//     console.log(i)
// }

// 1) i = 0; 0 < 5; ...console.log(i)..o/p: 0..i++..i = 1
// 2) i = 1; 1 <5..1. 2

// i wanted to print even numbers b/w 0 and 10

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {//if i is divislbe by 2(even)
        console.log(i)
    }
}