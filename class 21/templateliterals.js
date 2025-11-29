// template literals - > to create the strings in javascript using backticks ` `

// old way +
let name = "venkat";
let city = "bangalore";


let intro = "My name is " + name + " i am from " + city; //old way

let intro1 = `My name is ${name} and i am from ${city}`;

// console.log(intro)
console.log(intro1)


//old way
let address = "123 main road\n" +
"T - nagar\n" +
"chennai - 534343";

//new way

let address1 = `123 main road
T - nagar
chennai - 534343`;

console.log(address)
console.log(address1)


let title = "javaScript es6";
let description = "We are talking about template literals";

// html
let html = "<div>" +
            "<h1>" + title + "</h1>" +
            "<p>" + description + "</p>" +
            "</div>"
console.log(html)

