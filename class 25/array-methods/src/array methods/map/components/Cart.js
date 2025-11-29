

function Cart({cart}) {

    return (
        <div>
            <h2>Your cart:</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (

                <ul>
                    {cart.map((item) => (
                        <li>
                            {item.name} - Rs: {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default Cart