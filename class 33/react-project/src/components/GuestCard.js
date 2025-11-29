function GuestCard({guest, onDelete, onEdit}) {

    return (
        // cards each room

        <div className="card">
            <img src= {guest.photo} className="card-img" />
            <h2> {guest.name}</h2>
            <p>Email: {guest.email}</p>
            <p>Phone: {guest.phone}</p>

            <div className="card-actions">
                <button className = "edit" onClick={() => onEdit(guest)}>Edit</button>
                <button className = "delete" onClick={() => onDelete(guest.email)}>Delete</button>
            </div>
        </div>
    )
}

export default GuestCard



    

