

function App() {

  //product list
  const products = ["apple", "banana", "grapes", "mango"];

  //cart 
  let cart = ["apple", "mango"];

  //banana is checked in the cart
  let bananaIn = cart.indexOf("banana"); //-1

  //we have added the banana
  if(bananaIn === -1) {
    cart.push("banana")
  }

  let appleIn = cart.indexOf("apple");
  if(appleIn !== -1) {
    cart.splice(appleIn, 1) //remove the apple
  }







  return (
    <div>
      <h2>Bigbasket</h2>
      <p>Products Available: {products.join(", ")}</p>
      <p>Final Cart items added: {cart.join(", ")}</p>
    </div>
   
  )

}

export default App