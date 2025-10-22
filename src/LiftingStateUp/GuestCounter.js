const GuestCounter = ({guest}) => {
    const totalPeople = guest.reduce((sum, g) => sum + g.people, 0);
    return(
        <div className="card">
            <h2>Today we have {totalPeople}</h2>
        </div>
    )
}

export default GuestCounter