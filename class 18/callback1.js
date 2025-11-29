console.log("1. Start the cooking")

function cookBiryani(callback) {
    setTimeout(() => {
          callback()
        console.log("2. Biryani is cooked")
      
    }, 2000)  
    
}

cookBiryani(function() {
    console.log("3. now start cooking biryani curry")
});

console.log("4. Occupy table")