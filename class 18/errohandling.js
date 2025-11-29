// error handling is used to handle and manage the errors, 
// so that our program or applciation will not break


try {
    //code..might be working or breaking

} catch(error) {
    //handle in the catch if the code in try block break

} finally {
 // success or error....it will be executed
}

try {
    let a = 10;
    console.log(a);
} catch(error){
    console.log("something went wrong")
} finally {
    console.log("Done")
}

try {
    let num = 5;
    num.toUpperCase();
    console.log(num)
} catch(error){
    console.log("Error", error.name)
    console.log("Message", error.message)
}

try {
    let message = "hello all";
    try {
        message()
    } catch (error) {
        console.log("some problem")
    }
} catch (error) {
    console.log(error.name, error.message)
}


try {
    let name = "venkat"
    console.log(venkat)
} catch(error){
    console.log(error.message)
}


// 100 lines 
//user defined errors

try {
    let age = 16;

    if (age < 18) {
        throw new Error("Not eligible to vote")
    }

    console.log("He can vote", age)
} catch (error) {
    console.log(error.message)
}


try {
    let password =  "welcome1234";
    if(password.length < 7) {
        throw new Error("Password must be atleast 8 char")
    }
    console.log("password is accepted")
} catch(error){
    console.log(error.message)
}

// reference error
// type error
// syntax error
