//iterate over the javascript object

// const person = '{"name": "venkat","city": "bangalore","country": "INDIA"}';

// //convert JSON string to JS object

// const jsonObject = JSON.parse(person)

// for(let key in jsonObject) {
//     console.log(key, ":", jsonObject[key] ) 
// }



// const userJson = `
// [
//  {"id": 1, "name": "venkat}, 
//  {"id": 2, "name": "venkat}, 
//  {"id": 3, "name": "venkat}
// ]`

// const users = JSON.parse(userJson);


// Object.keys(), object.values() and object.entries()


const user = {
    id: 101,
    name: "venkat",
    role: "developer"
};

//get all the keys of the object
const keys = Object.keys(user);
console.log("Keys:", keys)

////get all the vaues of the object
const values = Object.values(user);
console.log("Values:", values);

//get all key-value paris as an array of arrays

const entries = Object.entries(user);
console.log("Entries:", entries);

// loop over the entries

entries.forEach(([key, value]) => {
    console.log(key, ":", value)
})
