import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

export default function NavBar() {
    return (
<div><nav>
            <ul  className={style.navbar}>
                <li>
                   <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="movies">Movies</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
}