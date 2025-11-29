// spread operator ... it is used to spread the elements (array, object, string) into individual elements

//copying, merging, ....code shorter and cleaner

let numbers = [1, 2, 3, 4, 5, 6]; //original array
// copy of the array
let copyNumbers = numbers.slice(); //slice method old way
copyNumbers.push("10")
console.log(copyNumbers);
console.log(numbers)

//spread
let numbers1 = [1, 2, 3, 4, 5, 6]; //original array
//copy
let copyNumbers1 = [...numbers1]; //spread operator
console.log(copyNumbers1)


//ex2
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

//merge two arrays
//let mergedArray = arr1.concat(arr2); //old way
let mergedArray = [...arr1, ...arr2]
console.log(mergedArray)

//ex3

let obj1 = {name: "venkat", city: "chennai"};
let obj2 = {country: "india"};

// copy and merge the above two objects
let mergeObj = Object.assign({}, obj1, obj2); //old way
let mergeObjNew = {...obj1, ...obj2}
console.log(mergeObj)
console.log(mergeObjNew)


// ex4;
let str = "venkat";
//convert the string into array
let chars = str.split(''); //old way
let charsNew = [...str]
console.log(chars);
console.log(charsNew)

//ex: 5

let mobiles = ["lg","oppo"];

//add the items
let newMobiles = mobiles.concat(["iphone", "vivo"]); //old way
let spreadMobiles = [...mobiles, "iphone", "vivo"]
console.log(newMobiles)
console.log(spreadMobiles)


// interview remove duplicates
let nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 10, 10];

let unique = [...new Set(nums)];
console.log(unique)


let user = {name: "venkat", city: "bangalore"}; //register

let updateUser = Object.assign({}, user, {city: "chennai", age: 30}); //old way
let updatedUserNew = {...user, city: "chennai", age: 30};

console.log(updateUser);
console.log(updatedUserNew)
