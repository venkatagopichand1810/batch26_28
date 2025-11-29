// step1: Search for the movie
function searchMovie(name, callback){
    setTimeout(() => {
        console.log(`1. Movie ${name} found`)
        callback(name); //after finding the movie, call the next step
    }, 1000)
}

//step 2: select seat for the movie
function selectSeat(movie, callback){
    setTimeout(() => {
        console.log(`2. Seat selected for ${movie}`)
        callback("A16"); //after selecting th esat, pass it next
    }, 1000)
}



//step 3: book the ticket with the selected seat
function bookTicket(seat, callback){
    setTimeout(() => {
        console.log(`3. Ticket is booked for ${seat}`)
        callback("A16"); //once booked, send seat infor
    }, 1000)
}



//step 4:send the confirmation message
function sendConfirmation(seat, callback){
    setTimeout(() => {
        console.log(`4. confirmation sms sent for seat ${seat}`)
        callback(); 
    }, 1000)
}


searchMovie("su from so", function(movie){
    selectSeat(movie, function(seat){
        bookTicket(seat, function(seat){
            sendConfirmation(seat, function() {
                console.log("5. Booking complete")
            })
        })
    })

})