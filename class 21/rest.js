// it is collects multiple value or arguments into single array


let numbers = [10, 20, 30, 40, 50];

// old way
// let first = numbers[0]; 
// let others = numbers.slice(1);

// rest operator
let[first, ...others] = numbers

console.log(first);
console.log(others);


let person = {
    name: "venkat",
    age: 30,
    city: "bangalore",
    country: "india"
}

// old
// let city = person.city;
// let country = person.country;
// let addresObj = {city, country};

//rest with object destrutring 

let {name, age, ...addresObj} = person

console.log(person);
console.log(addresObj)
