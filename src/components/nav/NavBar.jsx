import { Link, useNavigate } from "react-router-dom"
import './NavBar.css'


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to ="/">DOGS/HOME</Link>
            </li>
        </ul>
    )
}