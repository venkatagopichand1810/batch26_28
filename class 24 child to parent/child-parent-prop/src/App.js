
import ProductCard from "./ProductCard"

function App() {
  // function
  const handleAddToCart = (product) => {
    alert("parent received product: " + product.name + " " + product.price)

  }

  return(
    <>
      <ProductCard sendDataToParent = {handleAddToCart}/>
    </>
  )

}

export default App