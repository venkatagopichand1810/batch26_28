// function parameters

//i have created the product object
const product = {
    id: 1, 
    name: "Laptop",
    price: 60000,
    tag: "new model",
    offer: "50%"
}

// function showProductdata(product) {
//     console.log("Product:", product.name, "Price:", product.price, "tag", product.tag, "offer:", product.offer)
// }


function showProductdata({name, price, tag, offer}) {
    console.log("Product:", name, "Price:", price, "tag", tag, "offer:", offer)
}



showProductdata(product); //fuction call


