import jwt from "jsonwebtoken";
// dummy user data
const user = {
    id: 101, 
    name: "venkat",
    gamil: "venkat@gmail.com"
}

const SECRET_KEY = "HHFJKEWHRKLURHUIGR30343945739473894"

// generate token
const token = jwt.sign(
    {userid: user.id, name: user.name, gmail: user.gamil},
    SECRET_KEY,
    {expiresIn: "1h"}
);

try {
    const decodedData = jwt.verify(token, SECRET_KEY);
    console.log("valid token");
    console.log("Decoded data is", decodedData)

} catch(error){
    console.log("invalid token")
}

console.log("Generated token", token)