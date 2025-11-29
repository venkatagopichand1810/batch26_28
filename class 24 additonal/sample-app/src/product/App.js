
import ProductCard from "./ProductCard";
function App() {

  // const product = {
  //   name: "AC",
  //   price: 25000,
  //   inStock: false,
  //   details: {
  //     brand: "LG",
  //     warranty: "1 year waranty"
  //   },
  //   image: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/t/y/8/-original-imahcynq7wxhkaxa.jpeg?q=70"

  // }

  return (
    <div className="app-container">
      {/* product 1 */}
      <ProductCard
        name= "AC"
        price={25000}
        inStock={false}
        details={
          {
            brand: "LG",
            warranty: "1 year warranty"
          }
        }
        image="https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/t/y/8/-original-imahcynq7wxhkaxa.jpeg?q=70"
      />

      {/* product 2 */}

      <ProductCard
        name= "Tv"
        price={50000}
        inStock={true}
        details={
          {
            brand: "Samsung",
            warranty: "2 year warranty"
          }
        }
        image="https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/i/e/2/va2708-2k-mhd-quad-hd-27-2024-va2708-2k-mhd-viewsonic-original-imahceybqxxazge5.jpeg?q=80"
      />


       <ProductCard
        name= "Camera"
        price={15000}
        inStock={true}
        details={
          {
            brand: "Canon",
            warranty: "1 year warranty"
          }
        }
        image="https://rukminim2.flixcart.com/image/120/120/xif0q/dslr-camera/8/q/r/compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.jpeg?q=80"
      />
    </div>
  )
}

export default App