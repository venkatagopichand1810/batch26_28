import Scurmmaster from "./Scurmmaster"
function Manager({ mail }) {

    return (
        <>
                <Scurmmaster mail={mail} />
                Manager component
                {mail}
        </>



    )


}

export default Manager

// prop drilling -> fix context api -> centrailized data -> 