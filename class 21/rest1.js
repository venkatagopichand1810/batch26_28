
// problem statement
// function add(a, b, c, d, e, f ){
//     return a + b + c + d + e + f

// }

// console.log(add(10, 20)); //30
// console.log(add(10, 20, 30, 40, 80, 70)); //30

// old javascript

function add() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        // sum of all arugments
        total += arguments[i]
    }
    console.log(total)

}

function add(...nums) {
    let total = 0;
    for (let n of nums) {
        // sum of all arugments
        total += n
    }
    console.log(total)

}

add(10, 20, 30);
add(20, 30, 10, 50, 100, 400)
add(100, 200, 300, 400, 500, 600, 700, 10000)

