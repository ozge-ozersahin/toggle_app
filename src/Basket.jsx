const Cart = () => {
    const cart = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 600 },
        { id: 3, name: "Headphones", price: 150 }
    ];

    const priceSum = cart.reduce((sum, i) => sum + i.price, 0);
    return(
        <div className="card">
            <h1>This is our Cart : {cart.map((i) => <p key={i.id}>Product: {i.name} - Price: {i.price}</p>)}</h1>
            <h2>Summary of the cart: {priceSum} </h2>
        </div>
    )
}

export default Cart;