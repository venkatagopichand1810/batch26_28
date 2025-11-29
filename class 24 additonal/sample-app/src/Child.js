

function Child({name , age, children}){

    return (
        <div>
            <strong>{children}</strong>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
    
}
export default Child