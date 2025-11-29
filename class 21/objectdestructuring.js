//to extract the values from the object in simple way


// const mobile = {
//     name: "iphone",
//     price: "86000",
//     model: "iphone 13",
//     releaseDate: 2023
// }

// extract the properties

// const name = mobile.name;
// const price = mobile.price;
// const model = mobile.model;
// const releaseDate = mobile.releaseDate;

// const mobileName  = mobile.name;
// const mobilePrice = mobile.price;

// object destructuring: new way
// const {name, price, model, releaseDate} = mobile

// object destructuring:: rename the variables
// const {name:mobileName , price: mobilePrice} = mobile

// console.log("name of the mobile", name)
// console.log("price of the mobile", price)
// console.log("model of the mobile", model)
// console.log("releaseDate of the mobile", releaseDate)

// console.log("name of the mobile", mobileName)
// console.log("price of the mobile", mobilePrice)


// api response

const response = {
    statue: 200,
    data: {
        id: 1, 
        title: "Laptop",
        price: 45000
    }
}

//old way
const id1 = response.data.id;
const price1 = response.data.price;

//new way
const {data: {id, price}} = response



console.log(id1, price1)
console.log(id, price)