
import ProductCard from "./product/ProductCard";
function App() {

  const product = {
    name: "AC",
    price: 25000,
    inStock: false,
    details: {
      brand: "LG",
      warranty: "1 year waranty"
    },
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/t/y/8/-original-imahcynq7wxhkaxa.jpeg?q=70"

  }

  return (
    <div className="app-container">
      <ProductCard
        name={product.name}
        price={product.price}
        inStock={product.inStock}
        details={product.details}
        image={product.image}
      />
    </div>
  )
}

export default App