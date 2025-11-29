
import { memo } from "react";

function Title(){
    console.log("1 title")

    return (
        <>
            <h1>Title of the Page</h1>
        </>
    )

}

export default memo(Title)
