

function Child({name, age, isStudent, skills, user }) {

    return (
        <>
            <div>
                Name is : {name}
            </div>
            <p>
                Age is: {age}
            </p>
            <p>
                Student: {isStudent ? "yes he is student" : "no he is not the student"}
            </p>
            <p>
                Skills: {skills.join(", ")}
            </p>
            <p>
                User info:
                ID = {user.id},
                city: {user.city},
                country: {user.country}
            </p>
        </>
    )

}

export default Child