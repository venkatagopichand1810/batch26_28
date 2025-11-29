

import { useState } from "react";
import { rooms as initialRooms } from "../data";
import SearchBar from "../components/SearchBar";
import RoomCard from "../components/RoomCard";



function Rooms() {
    const [rooms, setRooms] = useState(initialRooms);
    // state to hold all the romms(initial rooms from data.js)

    const [query, setQuery] = useState('');
    //state to hold the search query which enter by the user
    
    // function to delete the room using its number
    // filter the rooms that matches the given number

    const handleDelete = (number) => {
        setRooms(rooms.filter((room) => room.number !== number))
    }

    // function to edit the room type
    const handleEdit = (room) => {
        // show the prompt to the user
        const newType = prompt("Enter the new room type", room.type);

        if (newType) {
            setRooms(
                rooms.map((room) =>
                    // if room number matches, updat the type else keep the room unchanged
                    room.number === room.number ? {
                        ...room,
                        type: newType
                    } : room)
            )
        }
    }



    // filter the rooms based on the user search
    const filtered = rooms.filter((room) =>
        room.type.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div>
            <h1>Rooms</h1>
            <SearchBar query={query} setQuery={setQuery} />

            {/*  to diplay the rooms */}
            <div className="grid">
                {/* map over the filterd rooms */}
                {filtered.map((room) => (
                    <RoomCard
                        room={room} 
                        onDelete={handleDelete}
                        onEdit={handleEdit}

                    />
                ))}

            </div>

        </div>
    )

}

export default Rooms