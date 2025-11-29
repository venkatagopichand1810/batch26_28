function RoomCard({room, onDelete, onEdit}) {

    return (
        // cards each room

        <div className="card">
            <img src = {room.photo} className="card-img"/>
            <h2>Room {room.number}</h2>
            <p>Type: {room.type}</p>
            <p>Status: {room.available ? "Available" : "Booked"}</p>

            <div className="card-actions">
                <button className = "edit" onClick={() => onEdit(room)}>Edit</button>
                <button className = "delete" onClick={() => onDelete(room.number)}>Delete</button>
            </div>
        </div>
    )

}

export default RoomCard