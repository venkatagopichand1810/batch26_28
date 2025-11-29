import { memo } from "react";

function Count({count}){

    console.log("2. Count")
    return(
        <>

        Count value is {count} <br></br>
        
        </>
    )

}

export default memo(Count)
