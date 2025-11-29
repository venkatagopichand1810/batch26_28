import { useState } from "react"
function BookingForm({onAddBooking}) {

    const [form, setForm] = useState({
        guest: "",
        room: "",
        date: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.guest && form.room && form.date) {
            onAddBooking(form);
            setForm({guest: "", room: "", date: ""})
        }
    }
    return(
        <form onSubmit={handleSubmit} className="bookingForm">
            <input 
                type="text"
                name="guest"
                placeholder="Guest Name"
                value={form.guest}
                onChange={handleChange}
            />
            <input
                type="text"
                name="room"
                placeholder="Room Number"
                value={form.room}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                placeholder="Enter the date"
                value={form.date}
                onChange={handleChange}
            />
            <button type="submit" className="bookingBtn">Add Booking</button>
        </form>
    )
}

export default BookingForm