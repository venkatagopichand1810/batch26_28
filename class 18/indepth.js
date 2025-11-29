// // i wanted to prepare tea

function boilWater(callback) {
    setTimeout(() => {
        console.log("water boiled");
        callback();
    }, 1000)

}

function addTeaPowder(callback) {
    setTimeout(() => {
        console.log("Tea powder is added");
        callback()
    }, 1000);

}

function waitSomeTimeUntilMix(callback) {
    setTimeout(() => {
        console.log("wait for somet to mix tea poweder with water");
        callback()
    }, 1000);
}

function pourIntoCup(callback) {
    setTimeout(() => {
        console.log("Tea is done");
        callback()
    }, 1000);
}



boilWater(() => {
    addTeaPowder(() => {
        waitSomeTimeUntilMix(() => {
            pourIntoCup(() => {
                console.log("Ready to serve")
            })
        })
    })
})



// promise way

// i wanted to prepare tea

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("water boiled");
            resolve()
        }, 1000)
    })

}


function addTeaPowder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Tea powder is added");
            reject("tea powder is over ")
        }, 1000)
    })

}

function waitSomeTimeUntilMix() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wait for somet to mix tea poweder with water");
            resolve()
        }, 1000)
    })
}

function pourIntoCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tea is done");
            resolve()
        }, 1000)
    })
}



// boilWater()
//     .then(addTeaPowder)
//     .then(waitSomeTimeUntilMix)
//     .then(pourIntoCup)
//     .then(() => {
//         console.log("Ready to serve")
//     })

// async function prepTea() {
//     try {
//         await boilWater();
//         await addTeaPowder();
//         await waitSomeTimeUntilMix();
//         await pourIntoCup();
//         console.log("Ready to serve")
//     } catch(error){
//         console.log("error while making tea and tea powder is not there")
//     } finally {
//         console.log("Done")
//     }

// }

// prepTea()


// callback 
// callback hell 
// Promise
// promise chaining
// asyc await 


// async await  is used to write async more like as sync


// async -> will return the promise
// await -> paused the function until the promise is resolved or rejected




async function prepTea() {
    try {
        await boilWater();
    } catch (error) {
        console.log("error while biling the wate")
    }

    try {
        await addTeaPowder();
    } catch (error) {
        console.log("error while adding the powder")
    }

    try {
        await waitSomeTimeUntilMix();
    } catch (error) {
        console.log("gas is over")
    }

    try {
        await pourIntoCup()
    } catch (error) {
        console.log("error while serving tea")
    }

}

prepTea()