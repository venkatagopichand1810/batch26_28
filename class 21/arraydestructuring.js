// array destructuring..to extract the values from the array and assign them to the variables in the single line

// var numbers = [1, 2, 3, 4, 5, 6];

// accessing the elements using the index value

//old way
// let first = numbers[0];
// let two = numbers[1];
// let three = numbers[2];
// let four = numbers[3];
// let five = numbers[4];
// let six = numbers[5]

// new way: array destructuring
// var[first, two, three, four, five, six] = numbers

// console.log(first, two, three, four, five, six)


// skipping the elements


//ex2: skipping elements

let numbers = [1, 2, 3, 4, 5, 6];

// accessing the elements using the index value

//old way
// let first = numbers[0];
// let four = numbers[3];
// let six = numbers[5]

// new way: array destructuring
// let[first, , , four, , six] = numbers

// console.log(first, four, six)



// let scores = [90, 80, 70, 60, 50, 40];  

// // check
// // let top1 = scores[0];
// // let top2 = scores[1];
// // let remainingScores = scores.splice(2); //here 2 is starting index where it is goint to extract till the end

// //new way array destructuring + rest
// let [top1, top2, ...remainingScores] = scores


// console.log(top1);
// console.log(top2);
// console.log(remainingScores)



// let products = ["AC", "Fan", "TV", "Mobile", "Charger", "mobile cable", "mobile screen gaurd"];

// let[ac, fan, tv, ...mobileRelated] = products;

// console.log(ac);
// console.log(fan);
// console.log(tv);
// console.log(mobileRelated)


// spread..it is going to spread elements
//rest.. ...it is going to combine muliple elements into single, assign variable



// let nested = [1, [2, 3], 4];

// // let first = nested[0];
// // let second = nested[1][0];
// // let third = nested[1][1];
// // let fourth = nested[2];

// let [first, [second, third], fourth] = nested

// console.log(first, second, third, fourth)



let productData = {
    productName: "AC",
    details: {
        price: 25000,
        latest: 2025,
        capacity: "1.5 Ton"
    }
}

// let productName = productData.productName;
// let price = productData.details.price; 
// let latest = productData.details.latest;
// let capacity = productData.details.capacity;

let{productName, details: {price, latest, capacity}} = productData

console.log(productName, price, latest, capacity)

