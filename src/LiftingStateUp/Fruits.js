const Fruits = (props) => {
    return(<div className="card">
        {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
    </div>)
}

export default Fruits;