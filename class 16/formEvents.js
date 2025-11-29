
const form = document.getElementById("myForm");
const log = document.getElementById("log");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const citySelect = document.getElementById("cities");
const messageTextarea = document.getElementById("message")

// submit event ->> when the form is submitted
form.addEventListener("submit", function(e) {
    // e.preventDefault(); //it is going to prevent the default behaviour of the form...it will stop refreshing the page
    log.textContent = "Form is submitted successfully"
})


form.addEventListener("reset", function(e) {
    log.textContent = "Form is resetted"
})

nameInput.addEventListener("focus", function() {
    log.textContent = "name field is focussed"
})

nameInput.addEventListener("blur", function() {
    log.textContent = "name field foucs gone"
})

citySelect.addEventListener("change", function() {
    log.textContent = `Selected city is ${this.value}`
})

ageInput.addEventListener("input", function() {
    log.textContent = `Age is ${this.value}`
})

document.getElementById("agreeTerms").addEventListener("change", function() {
    if(this.checked) {
        alert("Thank you for agreeing")
    } else {
        alert("You must agree to proceed")
    }
})