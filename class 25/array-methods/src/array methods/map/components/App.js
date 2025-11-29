
import ProductList from "./components/ProductList"
import Cart from "./components/Cart";

function App() {
  // array of product objects
  const products = [
    { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
    { id: 2, name: "Mobile phone", price: 10000, category: "Accessories" },
    { id: 3, name: "SHoes", price: 2000, category: "Fashion" },
    { id: 4, name: "AC", price: 50000, category: "Electronics" },
  ];

  const cart = [
    { id: 2, name: "Mobile phone", price: 10000, category: "Accessories" },
    { id: 4, name: "AC", price: 50000, category: "Electronics" },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping App</h1>
      <ProductList products = {products}/>
      <Cart cart = {cart} />

    </div>
  )

}

export default App