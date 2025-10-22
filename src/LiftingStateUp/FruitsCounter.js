const FruitsCounter = (props) => {
    return(
        <div className="card">
            <h2>Total fruits: {props.fruits.length}</h2>
        </div>
    )
}

export default FruitsCounter;