const User = () => {
    const users = [
        {id: 1, name: "Ali", age: 25},
        {id: 2, name: "Ayse", age: 20},
        {id: 3, name: "Mehmet", age: 15}
    ]
    const ortalama = users.reduce((sum, i) => sum + i.age , 0) / users.length;
    return(
        <div className="card">
            <h1> Here is my user object: {users.map((i) => <p key={i.id}>Name :{i.name} , Age: {i.age}</p> )} </h1>
            <h2>Average Age : {ortalama} </h2>
        </div>
    )
}

export default User;