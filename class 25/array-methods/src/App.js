

function App(){

  const products = [
    {name: "shirt", price: 500},
    {name: "geans", price: 1000}
  ]

  let total = 0;

  //use foreach to cal
  products.forEach(item => {
    total += item.price
  });

  return (
    <div>
      <h2>Total Price: Rs: {total}</h2>
    </div>
  )
}

export default App