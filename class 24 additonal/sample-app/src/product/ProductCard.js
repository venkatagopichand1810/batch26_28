

function ProductCard({ name, price, inStock, details, image }) {

    return (
        <>
            <div className="card">
                <img src={image} alt={name} className="product-image" />

                {/* Product info */}
                <h2>{name}</h2>
                <p className="price">${price}</p>
                <p><strong>Brand: </strong>{details.brand}</p>
                <p><strong>Warranty: </strong>{details.warranty}</p>
                {inStock ? (
                    <p className="stock in-stock">In Stock</p>
                ) : (
                    <p className="stock out-stock">no Stock</p>
                )
                }
            </div>

        </>
    )

}

export default ProductCard
