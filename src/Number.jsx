const Number = () => {
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map((i) => i * 2);
    const sum = numbers.reduce((sum, i) => sum + i , 0);
    return(
        <div className="card">
            <p>List of numbers: {numbers.join(" , ")} </p>
            <p>Double of the numbers: {doubled.join(" ,")}</p>
            <p>Summary of the numbers: {sum}</p>
        </div>
    )
}

export default Number;