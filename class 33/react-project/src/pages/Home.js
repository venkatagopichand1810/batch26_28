import { rooms, guests} from "../data"

function Home() {
    const totalRooms = rooms.length;
    const availableRooms = rooms.filter((room) => room.available).length;
    const totalGuests = guests.length;

    return (
        <div className="dashboard">
            <div className="rooms">Total Rooms: {totalRooms}</div>
            <div className="rooms">Available Rooms: {availableRooms}</div>
            <div className="rooms">Total Guests: {totalGuests}</div>
        </div>
    )



}

export default Home