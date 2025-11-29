import { useParams, useLocation, useNavigate, useSearchParams } from "react-router-dom"

const blogData = {
    1: "Treending things happening todays life TechCrunch (technology news)",
    2: "The Blond Abroad (travel) The Blond Abroad (travel) The Blond Abroad (travel)",
    3: "productivity and simple living Zen Habits (productivity and simple living)"
}

function BlogDetail(){

    const {id} = useParams(); //to get the id from the url
    const location  = useLocation(); //get the state from where the we came
    const navigate = useNavigate(); // to navigate programatically

    const blogContent = blogData[id]

    return (
        <>
        <div>
            <h2>Blog Details:</h2>
            <h3>{blogContent ? blogContent : "blog is not found"}</h3>

            <p>
                You came from: 
                {location.state?.from ? location.state.from : "direct link"}
            </p>

            <button onClick={() => navigate("/blogs")}>Back to blogs</button>
            <button onClick={() => navigate("/")}>GO home</button>
            

        </div>
        
        </>
    )




}

export default BlogDetail

//useMatch
//usenavigateType()
// useSearchParams()