
// JSON -> Javascript Object Notation, is the lightweight format used for storing and exechaging data

// JSON RULES: 
// Data in key/value pair
// data is seperated by commas

// how the JSON is used in javascript

// const product = {name: "AC", price: 25000}
// // convert javascript object to JSON
// const jsonString = JSON.stringify(product);
// console.log(jsonString)


const product = '{"name":"AC","price":25000}';
// convert  json to javascript object
const jsonString = JSON.parse(product);
console.log(jsonString);// javascript object as output



// array, objects, set, map (key - value pair) etc


//array -> linear data structure


