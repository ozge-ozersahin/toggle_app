const Guest = (props) => {
    return(
        <div className="card">  
            <h1>Today Booking List: {props.guest.map((g) => (<p key={g.id}>{g.guestName} : Table for {g.people} people</p>))}</h1>
        </div>
)
}

export default Guest;