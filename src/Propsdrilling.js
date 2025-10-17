const Main = (props) => {
    return <Header msg ={props.msg}></Header>
}
const Header = (props) => {
    return(
        <div style={{ border: "10px solid whitesmoke"}}>
            <h1>This is a Header</h1>
            <Wrapper msg ={props.msg}/>
        </div>
    )

}

const Wrapper = (props) => {
    return(
        <div style ={{ border: "10px solid lightgray"}}>
            <h2>This is a Wrapper</h2>
            <Button msg={props.msg}/>
        </div>
    )
}

const Button = (props) => {
    return (
        <div style={{ border: "20px solid orange"}}>
            <h3>This is a Button Component</h3>
            <button onClick={() => alert(props.msg)}>Click Me</button>
        </div>
    )
}

export default Main;
