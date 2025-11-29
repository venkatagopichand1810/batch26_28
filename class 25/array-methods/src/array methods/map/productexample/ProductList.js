
import "./ProductList.css"

function ProductList() {

    // array of product objects
    const products = [
        { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
        { id: 2, name: "Mobile phone", price: 10000, category: "Accessories" },
        { id: 3, name: "SHoes", price: 2000, category: "Fashion" },
        { id: 4, name: "AC", price: 50000, category: "Electronics" },
    ];
    return (
        <div>
            <h2>Product List</h2>

            <div className="product-container">
                {products.map((product) => (
                    <div className="product-item">
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <button className="addtocart">Add to Cart</button>
                    </div>

                ))}

            </div>

        </div>
    )

}

export default ProductList