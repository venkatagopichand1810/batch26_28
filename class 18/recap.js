// callback
// function downloadFile(venkat){
//     setTimeout(() => {
//         console.log("file is downloaded")
//         venkat();
//     }, 2000)

// }

// downloadFile(() => {
//     console.log("file is ready to open")
// })



// simply promise


function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("file is downloaded")
            resolve()
        }, 2000)
    })

}

// downloadFile()
//     .then(() => {
//         console.log("file is ready to open")
//     })


// async await
async function startDownload() {
    await downloadFile();
     console.log("file is ready to open")
}

startDownload()






//callback -> promise -> asyc await