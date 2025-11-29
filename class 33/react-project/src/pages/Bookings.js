
import BookingForm from "../components/BookingForm";
import { useState } from "react";

function Bookings() {
    // usestate variable for the bookings

    const[bookings, setBookings] = useState([]);

    // funtion to add the new booking,
    //take the booking object and append to the exsiting booking list
    const addBooking = (booking) => {
        setBookings([...bookings, booking])
    }

    return (
        <div>
            <h1>Bookings</h1>
            <BookingForm onAddBooking = {addBooking} />

            <ul className="bookings">
                {bookings.map((booking) => (
                    <li className="booking-detail">
                        Customer {booking.guest} booked the room with room number {booking.room} on {booking.date}
                        <button className="delete">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Bookings