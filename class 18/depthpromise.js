// promise method

// allSettled
// race
// any
// all..

// Promise.all()...waits for all the promises to fulfill if everything resolve it will success
// ....if one is rejected entire promise will be rejected


// Promise.allSettled()..wait for all the promises to finish..success or failure it doesnt care and it will give 
// resovle and reject states as an array


// movie
// Image by akamai
// video by aws

// const akamai = Promise.resolve("Loaded the movie poster with play button");
// const aws = Promise.resolve("video is loaded and ready play");
// const googleCloud =  Promise.resolve("data got from google");
// const azure = Promise.reject("not able to fetch the data")

// // Promise.all([akamai, aws, googleCloud, azure])
// //     .then((res) => console.log("movie playing", res))
// //     .catch((err) => console.log('promise error'))

// Promise.allSettled([akamai, aws, googleCloud, azure])
//     .then((res) => console.log("movie playing", res))
//     .catch((err) => console.log('promise error'))



//it is going to give the output of the first resolved or rejected

const fast = new Promise((resolve) => setTimeout(() => resolve("task completed fast"),2000));
const faster = new Promise((resolve) => setTimeout(() => resolve("task completed faster"),1000))
const slow = new Promise((resolve) => setTimeout(() => resolve("task completed slow"),3000));
const slower = new Promise((resolve) => setTimeout(() => resolve("task completed slower"),5000));

const outofbox = new Promise((resolve, reject) => setTimeout(() => reject("task completed slower"),500));


// Promise.race([fast, faster, slow, slower, outofbox]).then((result) => {
//     console.log("winner", result)
// })
// .catch((err) => {
//     console.log("gone case")
// })

Promise.any([fast, faster, slow, slower, outofbox]).then((result) => {
    console.log("winner", result)
})

// Promise.any: it will return the first resolved promise...