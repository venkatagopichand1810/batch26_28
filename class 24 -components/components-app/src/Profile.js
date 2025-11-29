

function Profile({name, city, state, country, age}) {
    // destructruing inside the function
    // const {name, city, state, country, age} = props;  //1 way
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h1>Name: {name}</h1>
            <p>City: {city}</p>
            <p>state: {state}</p>
            <p>country: {country}</p>
            <p>age: {age}</p>
        </div>
    )

}

export default Profile





// function Profile({...props}) {
//     // destructruing inside the function
//     // const {name, city, state, country, age} = props;  //1 way
//     return (
//         <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
//             <h1>Name: {props.name}</h1>
//             <p>City: {props.city}</p>
//             <p>state: {props.state}</p>
//             <p>country: {props.country}</p>
//             <p>age: {props.age}</p>
//         </div>
//     )

// }

// export default Profile