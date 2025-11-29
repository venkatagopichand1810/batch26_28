import Profile from "./Profile"

function App() {

    return (
        <>
            <Profile name = "ram" city = "bangalore" state = "kA" country = "india" age = "50"/>
            <Profile name = "rekha" city = "hyderabad" state = "kA" country = "Japan" age = "90"/>
            <Profile name = "john" city = "NYC" state = "kA" country = "USA" age = "70"/>
            <Profile name = "venkat" city = "chennai" state = "TN" country = "AUS" age = "40"/>
        </>
    )



}

export default App


// props..properties is the way to pass the data from the parent component to the child component..for the reusable purpose
//props are read-only