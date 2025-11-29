
import { useState } from "react";
import { guests as initialGuests } from "../data";
import SearchBar from "../components/SearchBar";
import GuestCard from "../components/GuestCard";


function Guests() {

    const [guests, setGuests] = useState(initialGuests);
    // state to hold all the romms(initial rooms from data.js)

    const [query, setQuery] = useState('');


    const handleDelete = (email) => {
        setGuests(guests.filter((guest) => guest.email !== email))
    }

    // function to edit the room type
    const handleEdit = (guest) => {
        // show the prompt to the user
        const newName = prompt("Enter the new name", guest.name);

        if (newName) {
            setGuests(
                guests.map((guest) =>

                    guest.email === guest.email ? {
                        ...guest,
                        name: newName
                    } : guest)
            )
        }
    }



    // filter the rooms based on the user search
    const filtered = guests.filter((guest) =>
        guest.name.toLowerCase().includes(query.toLowerCase())
    )


     return (
        <div>
            <h1>Guests</h1>
            <SearchBar query={query} setQuery={setQuery} />

            {/*  to diplay the rooms */}
            <div className="grid">
                {/* map over the filterd rooms */}
                {filtered.map((guest) => (
                    <GuestCard
                        guest={guest} 
                        onDelete={handleDelete}
                        onEdit={handleEdit}

                    />
                ))}

            </div>

        </div>
    )


}

export default Guests