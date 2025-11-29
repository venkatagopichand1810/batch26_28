
const person = {
    name: "venkat",
    age: 30,
    street: "kr puram",
    pinCode: 560036,
    country: "india",
    city: "bangalore"
}

// old way
// const personName = person.name;
// const age = person.age;
// const adddress = {
//     street: person.street,
//     pinCode: person.pinCode,
//     country: person.country, 
//     city: person.city
// }

// new way
const {name, age, ...adddress} = person

console.log(name);
console.log(age);
console.log(adddress)