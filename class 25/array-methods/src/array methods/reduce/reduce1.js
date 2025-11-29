

function App() {

   const Cart = [
        { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
        { id: 2, name: "Mobile phone", price: 10000, category: "Accessories" },
        { id: 3, name: "SHoes", price: 2000, category: "Fashion" },
        { id: 4, name: "AC", price: 50000, category: "Electronics" },
    ];

    //use reduce method
    const totalPrice = Cart.reduce((acc, item) => acc + item.price, 0)

    return (
      <>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {Cart.map(item => (
            <li>
              {item.name}
            </li>
          ))}
        </ul>
        <h3>Total Price: Rs: {totalPrice}</h3>
      </div>
      
      </>
    )

}

export default App