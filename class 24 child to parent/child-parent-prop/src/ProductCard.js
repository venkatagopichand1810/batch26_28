function ProductCard({sendDataToParent}){
    const product = {
        id: 101, 
        name: "laptop",
        price: 55000
    };

    const addToCart = () => {
        sendDataToParent(product)
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={addToCart}>Add To Cart</button>

        </div>
    )

}

export default ProductCard