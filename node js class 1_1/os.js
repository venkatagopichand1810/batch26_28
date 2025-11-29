// os module..provide all the information of operating system and hardware

const os = require("os");

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.type())
// console.log(os.release())
// console.log(os.cpus())
// console.log(os.totalmem())
// console.log("free memory", os.freemem())
console.log("system uptime", os.uptime());
console.log("current user info", os.userInfo())
console.log("netowokr interfaces", os.networkInterfaces())