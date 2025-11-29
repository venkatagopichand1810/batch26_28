// fs module in node used to interact with the file system...
//like creating, reading, updating, deleting, renaming....

//to create the new file
// const fs = require("fs");

// try {
//     fs.writeFileSync("notes.txt", "Today is about fs system and express js");
//     console.log("file is created successfully")

// } catch(error){
//     console.log("error creating the file")
// }


//read the file
// const fs = require("fs");

// try {
//     const content = fs.readFileSync("notes.txt", "utf-8");
//     console.log(content)

// } catch(error){
//     console.log("error reading the file")
// }


//append data to the file
// const fs = require("fs");

// try {
//     fs.appendFileSync("notes.txt", "\nI wanted to give more details about the custom packages in node js");
//     console.log("appended the data successfully")

// } catch(error){
//     console.log("error appending the file")
// }


// rename the file 

const fs = require("fs");
try {
    fs.renameSync("notes.txt", "updated_notes.txt");
    console.log("File is renamed successfully")
} catch(error){
    console.log("unable to rename the file")
}

// delete the file 
const fs = require("fs");
try {
    fs.unlinkSync("updated_notes.txt");
    console.log("File is deleted successfully")
} catch(error){
    console.log("unable to delete the file")
}


// create the new folder
const fs = require("fs");

try {
    fs.mkdirSync("venkat");
    console.log("folder is created")
} catch (error) {
    console.log("error creating the folder")
}

// remove the  folder
const fs = require("fs");

try {
    fs.rmdirSync("venkat");
    console.log("folder is removed")
} catch (error) {
    console.log("error removing the folder")
}

// copy a file

const fs = require("fs");

try {
    fs.readFileSync("venkat.txt", "utf-8");
    fs.copyFileSync("venkat.txt", "venkat1.txt");
    console.log("file copied successfully")

} catch(error){
    console.log("error copying the file")
}