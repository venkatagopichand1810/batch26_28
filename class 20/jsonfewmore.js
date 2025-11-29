// javascript object
// const comment = {
//     title: "From venkat",
//     body: "good movie",
//     id: 1, 
// }

// // convert to json object to json string
// const jsonString = JSON.stringify(comment)

// console.log(comment)
// console.log(jsonString)



//json string 

const comment1 = '{"title": "From venkat","body": "good movie","id": 1}';

// convert json string to json object
const jsObj = JSON.parse(comment1);
console.log(jsObj)

console.log(jsObj.title)



// JSON.parse -> string to Object
// JSON.stringify -> object to string