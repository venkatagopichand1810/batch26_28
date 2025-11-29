import bcrypt from "bcryptjs";

const userPassword = "venkat@321welcome33333";

// hash the password

bcrypt.hash(userPassword, 10, (err, hashedPassord) => {
    console.log("original password", userPassword);
    console.log("hashed password", hashedPassord)
})

bcrypt.compare(userPassword, "$2b$10$heFahAS7E0SumgjX0zCSl.cNRN4.Ow/7xDi17sotpiP0m3C0.1DQq", (err, ismatch) => {
if(ismatch){
    console.log("login Password is matched")
} else {
    console.log("password is not matched")
}
})