
import { memo } from "react";

function CountBtn({handleCount}){

        console.log("3. CountBtn")


    return (
        <>
            <button onClick={handleCount}>Count increment</button>
        </>
    )

}

export default memo(CountBtn)
