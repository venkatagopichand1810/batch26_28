const movie = new Promise((resolve, reject) => {

    if(true){
        resolve("lets go to movie")
    } else {
        reject(" no not intrested")
    }
})

movie
    .then((message) => {
        console.log(message)
    })
    .catch((err) => {
        console.log("sorry", err)
    })
    .finally(() => {
        console.log("operation is completed")
    })