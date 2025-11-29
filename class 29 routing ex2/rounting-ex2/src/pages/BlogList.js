import { Link, useLocation} from "react-router-dom"


// dummy data
const blogs = [
    { id: 1, title: "TechCrunch (technology news)" },
    { id: 2, title: "The Blond Abroad (travel)" },
    { id: 3, title: "Zen Habits (productivity and simple living)" }
]


function BlogList() {
    const location = useLocation();
    //uselocation give us the infor about the current url, search params, state etc

    return (
        <div>
            <h2>Blog List</h2>

            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to = {`/blogs/${blog.id}`} state={{from: location.pathname}}>
                            {blog.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )




}

export default BlogList