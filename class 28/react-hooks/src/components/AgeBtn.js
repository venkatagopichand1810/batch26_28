
import { memo } from "react";

function AgeBtn({handleAge}){
    
    console.log("5. AgeBtn")

    return (
        <>
            <button onClick={handleAge}>Age Increment</button>
        </>
    )

}

export default memo(AgeBtn)
