
import "./ProductList.css"

function ProductList({products}) {
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