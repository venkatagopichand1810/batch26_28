const path = require("path");

const filePath = "C:/Users/Pictures/batch 28/server.js";

console.log("Directory name:", path.dirname(filePath));
console.log("Base name", path.basename(filePath));
console.log("file extension", path.extname(filePath))

//join paths
const fullPath = path.join("/pictures", "local", "user", "server.txt");
console.log("joined path", fullPath)
