const Card = props => {
    const handleClick = () => console.log("clicked") 
    return(
        <div className="card">
            <h1>This card's value is {props.num}</h1>
            <p>This is: {props.num >= 50 ? (
                <span style={{color:"red", fontWeight:"bold"}}>High</span>
            ): <span style={{color:"goldenrod", fontWeight:"bold"}}>Low
                </span>}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Card;