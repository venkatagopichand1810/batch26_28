function App(){

 const products = [
        { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
        { id: 2, name: "Mobile phone", price: 10000, category: "Accessories" },
        { id: 3, name: "SHoes", price: 2000, category: "Fashion" },
        { id: 4, name: "AC", price: 50000, category: "Electronics" },
    ];

  const expensiveProducts = products.filter(product => product.price >=50000)
  return (
    <div>
      <h2>All products</h2>
      <ul>
        {products.map(product => (
          <li>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h2>Expensive Products</h2>
=
         <ul>
        {expensiveProducts.map(product => (
          <li>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App