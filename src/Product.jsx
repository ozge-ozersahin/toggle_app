const Product = () => {

    const products = [
        { id: 1, name: "T-shirt", price: 20, category: "clothing" },
        { id: 2, name: "Laptop", price: 1000, category: "electronics" },
        { id: 3, name: "Shoes", price: 50, category: "clothing" }
    ];

   const makeUpperCase = products.map((i) => ({ ...i ,name: i.name.toUpperCase()}));
   const clothingProducts = products.filter((i) => (i.category === "clothing"));

    return(
        <div className="card">
            <h1>Task 1: </h1>
            { makeUpperCase.map((i) => <p>{i.name} {i.price} {i.category}</p> )}
            <h1>Task 2:</h1>
            { clothingProducts.map((i) => <p>{i.name} {i.price} {i.category}</p>)}
            <h1>Task 3:</h1>
            <p>{clothingProducts.reduce((sum, i) => sum + i.price , 0)}</p>

        </div>
    )
}

export default Product;