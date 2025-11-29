
function GrandGrandChild({ user }) {

    return (
        <>
        <strong>Grand grand Child component</strong>
            <p>Name is: {user.name}</p>
            <p>City is: {user.city}</p>
            <p>Age is: {user.age}</p>

        </>
    )

}

export default GrandGrandChild