import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);

  // function to increment
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  // function to decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <div>
        <h2>Product: Iphone 13</h2>
        <p>Price: $999</p>
        <p>Quantity: {quantity}</p>
        <p>Total: Rs: {quantity * 999}</p>
        <button onClick={increaseQuantity}>+</button>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </>
  )

}

export default App