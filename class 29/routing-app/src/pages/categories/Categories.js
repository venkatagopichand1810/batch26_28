import { Link, Outlet } from "react-router-dom";

function Categories() {


    return (

        <>
            <nav className="">
                <ul className="nav-links">
                    <li><Link to="kidswear">kidswear</Link></li>
                    <li><Link to="accessories">accessories</Link></li>
                    <li><Link to="menswear">menswear</Link></li>

                </ul>
            </nav>

            <div>
                <Outlet />
            </div>
        </>
    )

}
export default Categories