// switch statement is used to perform different actions based on different conditions

//switch(expression) {
//     case value1: 
//     //code to run if expression === value1
//     // break;
//     case value2:
//    //code to run if expression === value2  
//     // break;
//    default:
//     //code to run if none of the cases are true
//  }


// let mobile = "iphone";

// if(mobile === "oppo"){
//     console.log("oppo mobile")
// } else if(mobile === "vivo") {
//      console.log("vivo mobile")
// } else if(mobile === "iphone"){
//      console.log("iphone mobile")
// } else {
//     console.log("keypad mobile")
// }

// switch(mobile) {
//     case "oppo":
//         console.log("oppo mobile");
//     case "vivo":
//          console.log("vivo mobile") 
//          break;
//     case "samsung":
//         console.log("samsung mobile")
//         break
//     case "BPL":
//         console.log("BPL mobile")
//         break;
//     case "iphone":
//         console.log("Iphone mobile");
//         break;
//     default: 
//         console.log("keypad mobile")
// }


let age = 25;

switch(true) {
    case (age < 13):
        console.log("child");
        break;
    case (age >=13 && age < 20):
        console.log("Teenager");
        break;
    case (age >=20 && age < 60):
        console.log("adult");
        break;
    default:
        console.log("senior citizon")
}