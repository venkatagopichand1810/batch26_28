

function Child({ sendDataToParent }) {

    const sendObject = () => {
        const student = {
            id: 1,
            name: "venkat",
            course: "MERN STACk"
        }
        sendDataToParent(student)
    }




    return (
        <div>

            <button onClick={sendObject}>Send Data to parent</button>

        </div>
    )

}


export default Child