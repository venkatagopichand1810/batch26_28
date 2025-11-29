
// get elements

const payBtn = document.getElementById("paybtn");
const nameField = document.getElementById("name");
const amountField = document.getElementById("amount");
const payment = document.getElementById("payment")
const message = document.getElementById("paymentMessage")
function processPayment() {
    const name = nameField.value.trim(); //trim remove the white spaces
    const amount = amountField.value.trim();

    // if condition to check value is entered or not
    if (name === "" || amount === "" || Number(amount) <=0) {
        message.style.color = "red"
        message.textContent = "Please enter the name and amount!"
        return; //it will stop the execution here
    }

    message.style.color = "blue";
    message.textContent = "Processing payment";

    setTimeout(() => {
        message.style.color = "green";
        message.textContent = `Payment of ${amount} by ${name} was succesfull!`; //binding or interpolation or template literals
        nameField.value = ""; //clearing the fields
        amountField.value = ""; 

    }, 2000)


} //end

// event 1 click event to the pay btn
payBtn.addEventListener("click", processPayment);

//event 2
payBtn.addEventListener("mouseover", () => {
 payBtn.style.backgroundColor = "green"
})


//event 3
payBtn.addEventListener("mouseout", () => {
 payBtn.style.backgroundColor = "yellow"
})


//event 4
payment.addEventListener("dblclick", () => {
 payment.style.backgroundColor = "brown"
})


document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        processPayment()
    }
})
