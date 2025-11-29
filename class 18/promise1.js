
function login(username, password){
    return new Promise((resolve, reject) => {
        if(username === "admin" && password ==="admin1234"){
            resolve("Login successfull")
        } else {
            reject("invalid credentials")
        }
    })

}

login("admin", "admi1234")
    .then((res) => console.log(res))
    .catch((error) => console.log(error))