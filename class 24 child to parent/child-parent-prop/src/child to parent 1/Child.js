

function Child({venkat}) {

    // function to trigger parent callback
    const handleClick = () => {
        venkat("hello parent, message from child")
    }


    
    return (
        <div>
            <h2>I am child component</h2>
            <button onClick={handleClick}>Send message to Parent</button>
        </div>
    )

}

export default Child