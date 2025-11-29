import { memo } from "react";

function Age({age}){

    
        console.log("4. Age")

    return (
        <>
         Age is:  {age} <br />
        </>
    )

}

export default memo(Age)


// 
