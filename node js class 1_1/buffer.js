const buffer = Buffer.from("live match coming shooting");
console.log(buffer);
console.log(buffer.toString())

// fixed size 500 bytes
const buffer1 = Buffer.alloc(500);
console.log(buffer1)

const buffer2 = Buffer.from("JIO HOTSTAR");
//CONVERT BUFFER TO JSON 
const json = buffer2.toJSON();
console.log(json)