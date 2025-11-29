import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css"

function App() {
  const [products, setProduct] = useState([]); //stores the fetched product data
  const [error, setError] = useState(null);// if we have any error 
  const [loading, setLoading] = useState(true); //this is loading message
  const [cart, setCart] = useState([]); //it is going to manages the itesm added to the cart
  const [showCart, setShowCart] = useState(false)

  // useEffect to do an api call
  useEffect(() => {
    // fetch the data from the api
    const fetchProduct = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const productData = await productResponse.json(); //parse the json response
        setProduct(productData);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [])

  // condition for loading
  if (loading) {
    return <h1>Data is loading please wait</h1>
  }

  //condition if error
  if (error) {
    return <h1>Error: {error}</h1>
  }

  // to add the product in cart
  const addToCart = (product) => {
    if(cart.find(item => item.id === product.id)) {
      alert("Item is already added to the cart");
      return;
    } else {
      setCart([...cart, product])
    }
  }

  // to remove the product from the cart
  const removeCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  return (
    <div className="App">
      {/* navbar component to display the number of 
      items added to the cart */}
      <Navbar cartCount = {cart.length} onCartClick = {() => setShowCart(true)}/>
      <h1>Products</h1>

      {/* diplay the products */}
      <div className="product">
        {products.map((product) => (
          <ProductCard 
            product={product} 
            key={product.id} 
            onAddCart = {addToCart}
          />

        ))}
      </div>

      {/* render the cart component */}
      {showCart && (
        <Cart
          cart = {cart}
          onClose={() => setShowCart(false)}
          onRemoveFromCart={removeCart}
        />
      )}

    </div>
  )
}

export default App

Roles & Responsibilities:

Built reusable and modular React components to ensure maintainability and scalability.

Implemented React Hooks (useState, useEffect) for managing component state and side effects.

Integrated APIs using fetch/axios for dynamic product rendering and handled error/loading states effectively.

Designed and developed responsive layouts using TailwindCSS, ensuring seamless performance on desktops, tablets, and mobiles.

Implemented form handling and validation for login, registration, and checkout workflows.

Optimized app performance by reducing re-renders, applying memoization, and using conditional rendering.

Used Git & GitHub for version control, working with feature branches and clean commit practices.

Deployed the application on Netlify/Vercel, making it available for end-users.